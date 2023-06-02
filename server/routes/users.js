const express = require("express")
const router = express.Router();

const bcrypt = require("bcryptjs")
const keys = require("../config/keys")

const User = require("../models/User")
const UserSession = require("../models/UserSession")
const Testimonials = require("../models/Testimonial");
const Sessions = require("../models/Session");

router.get('/', (req, res) => {
    return res.json({
        message: "User router works"
    })
})

const takenUsername = async (username) => {
    const user = await User.findOne({ username} );
    if (user) return true;
    else return false;
}

const takenEmail = async (email) => {
    const user = await User.findOne({ email });
    if (user) return true;
    else return false;
}

router.post("/signup", (req, res) => {
    let { username, email, password, firstName, lastName, userType } = req.body

    if (!username || !email || !password || !firstName || !lastName || !userType) {
        return res.json({
            success: false,
            message: "Error: Missing fields"
        })
    }

    username = username.toLowerCase();
    email = email.toLowerCase();

    User.findOne({ username }, (err, user) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error 1"
            });
        }

        if (user) {
            return res.json({
                success: false,
                message: "Error: Username already taken"
            });
        }

        User.findOne({ email }, (err, user) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Error: Server Error 2"
                });
            }

            if (user) {
                return res.json({
                    success: false,
                    message: "Error: Email already taken"
                });
            }

            const newUser = new User({
                username,
                password,
                email,
                firstName,
                lastName,
                userType
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;

                    newUser.password = hash;
                    newUser.save().then(user => {

                        const newUserSession = new UserSession({
                            user: user._id,
                        });

                        newUserSession.save((err, doc) => {
                            if (err) {
                                return res.json({
                                    success: false,
                                    message: "Error: Server Error"
                                })
                            }

                            return res.json({
                                success: true,
                                message: "Signed up",
                                user,
                                token: doc._id
                            })
                        })
                    });
                })
            })
        });
    })
})

router.post("/signin", (req, res) => {
    let { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "Error: Missing fields"
        })
    }

    email = email.toLowerCase();

    User.findOne({ email }, (err, user) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            })
        }

        if (!user) {
            return res.json({
                success: false,
                message: "Error: Invalid email"
            })
        }

        if (!user.validPassword(password)) {
            return res.json({
                success: false,
                message: "Error: Invalid password"
            })
        }

        const newUserSession = new UserSession({
            user: user._id
        });

        newUserSession.save((err, doc) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Error: Server Error"
                })
            }

            return res.json({
                success: true,
                message: "Valid sign in",
                token: doc._id
            })
        })
    })
})

router.get("/verify", (req, res) => {
    const { token } = req.query;

    UserSession.findOne({
        _id: token,
    }, (err, session) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            })
        }

        if (!session) {
            return res.json({
                success: false,
                message: "Error: Invalid"
            })
        }

        User.findOne({
            _id: session.user
        }, (err, user) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Error: Server Error"
                })
            }

            return res.json({
                success: true,
                message: "Valid",
                user,
            })
        })
    })  
})

router.get("/logout", (req, res) => {
    const { token } = req.query;

    UserSession.findOneAndDelete({
        _id: token,
    }, (err, session) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            })
        }

        if (!session) {
            return res.json({
                success: false,
                message: "Error: Invalid"
            })
        }

        return res.json({
            success: true,
            message: "Logged out"
        })
    })
})

router.get("/get", (req, res) => {
    const { userId } = req.query;

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
                message: "Error: Server Error"
            });
        }

        return res.json({
            success: true,
            user
        })
    })
})

router.post("/update", (req, res) => {
    const { userId, username, email, firstName, lastName } = req.body;
    
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
                message: "Error: User not found"
            });
        }

        if (!username || !email || !firstName || !lastName) {
            return res.json({
                success: false,
                message: "Error: Fields not given"
            });
        }

        User.findOne({ username }, (err, user1) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Error: Server Error"
                });
            }

            if (user1 && user1._id.toString() !== userId.toString()) {
                return res.json({
                    success: false,
                    message: "Error: Username already taken"
                })
            }

            User.findOne({ email }, (err, user2) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Error: Server Error"
                    });
                }

                if (user2 && user2._id.toString() !== userId.toString()) {
                    return res.json({
                        success: false,
                        message: "Error: Email already taken"
                    })
                }

                user.username = username;
                user.email = email;
                user.firstName = firstName;
                user.lastName = lastName;
        
                user.save((err, user3) => {
                    if (err) {
                        return res.json({
                            success: false,
                            message: "Error: Server Error"
                        });
                    }
        
                    return res.json({
                        success: true,
                        message: "User updated",
                        user: user3
                    })
                })
            }) 
        })
    })
})

router.post("/delete", (req, res) => {
    const { userId } = req.body;

    User.findOneAndDelete({ _id: userId }, (err, user) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            });
        }

        if (!user) {
            return res.json({
                success: false,
                message: "Error: User not found"
            })
        }

        Testimonials.find({ $or: [{ fromUser: userId}, { toUser: userId }]}).deleteMany((err, testimonials) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Error: Server Error"
                });
            }

            if (user.userType == "tutor") {
                Sessions.find({ createdBy: userId }).deleteMany((err, sessions) => {
                    if (err) {
                        return res.json({
                            success: false,
                            message: "Error: Server Error"
                        });
                    }
                })
            } else {
                Sessions.find({ participants: { $in: [userId]}}).updateMany({ $pull: { participants: userId}}, (err, sesions) => {
                    if (err) {
                        return res.json({
                            success: false,
                            message: "Error: Server Error"
                        });
                    }
                })
            }

            UserSession.find({ user: userId}).deleteMany((err, sessions) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Error: Server Error"
                    });
                }

                return res.json({
                    success: true,
                    message: "User deleted"
                })
            }) 
        })
    })
})

module.exports = router;