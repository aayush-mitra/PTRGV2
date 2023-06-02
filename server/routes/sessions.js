const express = require("express")
const router = express.Router();

const bcrypt = require("bcryptjs")
const keys = require("../config/keys")

const User = require("../models/User")
const UserSession = require("../models/UserSession")
const Testimonial = require('../models/Testimonial')
const Session = require('../models/Session')

// Create
router.post("/create", (req, res) => {
    let { user, subject, name, date, time, link, format, description } = req.body;

    if (!user || !subject || !name || !date || !time || !link || !format || !description) {
        return res.json({
            success: false,
            message: "Error: Missing fields"
        })
    }

    User.findOne({ _id: user}, (err, user) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            });;
        }
        
        if (!user) {
            return res.json({
                success: false,
                message: "Error: User does not exist"
            })
        }

        if (user.userType != "tutor") {
            return res.json({
                success: false,
                message: "Error: User is not a tutor"
            })
        }
        
        const newSession = new Session({
            createdBy: user._id,
            subject,
            name,
            date,
            time,
            link,
            format,
            description
        })

        newSession.save((err, session) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Error: Server Error"
                });
            }

            user.sessions.push(session._id);
            user.save((err, user) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Error: Server Error"
                    });

                    
                }

                return res.json({
                    success: true,
                    message: "Session created",
                    user,
                    session
                })
            })
        })
    })
})

// Edit
router.post("/edit", (req, res) => {
    let { sessionId, user, subject, name, date, time, link, format, description } = req.body;

    if (!sessionId || !user || !subject || !name || !date || !time || !link || !format || !description) {
        return res.json({
           success: false,
           message: "Error: Missing fields"
       })
    }

    User.findOne({_id: user}, (err, user) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            });
        }

        if (!user) {
            return res.json({
                success: false,
                message: "Error: User does not exist"
            })
        }
        
        if (    user.userType !== "tutor") {
            return res.json({
                success: false,
                message: "Error: User is not a tutor"
            })
        }
        
        Session.findOne({_id: sessionId}, (err, session) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Error: Server Error"
                });
            }

            if (!session) {
                return res.json({
                    success: false,
                    message: "Error: Session does not exist"
                })
            }

            if (session.createdBy.toString() != user._id.toString()) {
                return res.json({
                    success: false,
                    message: "Error: User is not creator of session"
                })
            }

            session.subject = subject;
            session.name = name;
            session.date = date;
            session.time = time;
            session.link = link;
            session.format = format;
            session.description = description;

            session.save((err, session) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Error: Server Error"
                    });
                }

                return res.json({
                    success: true,
                    message: "Session edited",
                    session
                })
            })
        })
    })
})

// Join
router.post("/join", (req, res) => {
    const {sessionId, userId} = req.body;

    Session.findOne({_id: sessionId}, (err, session) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            });
        }

        if (!session) {
            return res.json({
                success: false,
                message: "Error: Session does not exist"
            })
        }

        if (session.format === 'one-on-one' && session.participants.length === 1) {
            return res.json({
                success: false,
                message: "Error: Participant limit exceeded."
            });
        }

        User.findOne({_id: userId}, (err, user) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Error: Server Error"
                });
            }

            if (!user) {
                return res.json({
                    success: false,
                    message: "Error: User does not exist"
                })
            }
            
            if (user.userType !== 'student') {
                return res.json({
                    success: false,
                    message: "Error: User is not student."
                });
            }

            session.participants.push(user._id);
            session.save((err, session1) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Error: Server Error"
                    });
                }

                user.sessions.push(session._id);
                user.save((err, user1) => {
                    if (err) {
                        return res.json({
                            success: false,
                            message: "Error: Server Error"
                        });
                    }

                    return res.json({
                        success: true,
                        message: 'Session Joined',
                        user: user1,
                        session: session1
                    })
                })
            })
        })
    })
})

// Leave
router.post("/leave", (req, res) => {
    const { sessionId, userId } = req.body;
    
    Session.findOne({ _id: sessionId }, (err, session) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            });
        }

        if (!session) {
            return res.json({
                success: false,
                message: "Error: Session does not exist"
            })
        }

        User.findOne({ _id: userId }, (err, user) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Error: Server Error"
                });
            }

            if (!user) {
                return res.json({
                    success: false,
                    message: "Error: User does not exist"
                });
            }

            if (user.userType !== "student") {
                return res.json({
                    success: false,
                    message: "Error: User is not a student"
                })
            }

            if (!user.sessions.includes(session._id)) {
                return res.json({
                    success: false,
                    message: "Error: User is not in this session"
                })
            }

            session.participants = session.participants.filter((p) => {
                return p.toString() !== user._id.toString();
            })

            session.save((err, session1) => {
                user.sessions = user.sessions.filter((s) => {
                    return s.toString() !== session._id.toString();
                })

                user.save((err, user1) => {
                    return res.json({
                        success: true,
                        messsage: "Left session",
                        user: user1,
                        session: session1
                    })
                })
            })
        })
    })
})

//Delete
router.post("/delete", (req, res) => {
    const {sessionId, userId} = req.body;
    
    Session.findOne({_id: sessionId}, (err, session) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            });
        }

        if (!session) {
            return res.json({
                success: false,
                message: "Error: Session does not exist"
            })
        }
        
        User.findOne({_id: userId}, (err, user) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Error: Server Error"
                });
            }

            if (!user) {
                return res.json({
                    success: false,
                    message: "Error: User does not exist"
                })
            }
           
            if (session.createdBy.toString() != user._id.toString()) {
                return res.json({
                    success: false,
                    message: "Error: User is not creator of session"
                })
            }

            
            User.find({}, (err, users) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Error: Server Error"
                    });
                }
                let promises = [];
                users.filter(user => user.sessions.includes(session._id)).forEach(user => {
                    user.sessions.splice(user.sessions.indexOf(session._id), 1);
                    promises.push(user.save());
                })

                Promise.all(promises).then(() => {
                    session.remove((err) => {
                        if (err) {
                            return res.json({
                                success: false,
                                message: "Error: Server Error"
                            });
                        }

                        return res.json({
                            success: true,
                            message: "Session deleted",

                        })
                    })
                })
            })
        })
    })
})

router.get("/get", (req, res) => {
    const { userId } = req.query;
    
    User.findOne({ _id: userId })
    .populate({
        path: 'sessions',
    })
    .exec((err, user) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            });
        }

        if (!user) {
            return res.json({
                success: false,
                message: "Error: User does not exist"
            })
        }

        console.log(user)

        return res.json({
            success: true,
            sessions: user.sessions
        })
    })
})

router.get('/general', (req, res) => {
    Session.find({}, (err, sessions) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            });
        }

        if (!sessions) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            });
        }

        return res.json({
            success: true,
            sessions
        })
    })
})




module.exports = router;