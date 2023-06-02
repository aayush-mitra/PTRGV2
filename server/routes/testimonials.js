
const express = require("express")
const router = express.Router();

const bcrypt = require("bcryptjs")
const keys = require("../config/keys")

const User = require("../models/User")
const UserSession = require("../models/UserSession")
const Testimonial = require('../models/Testimonial')

router.get('/', (req, res) => {
    return res.json({
        message: "Testimonial router works"
    })
})

router.post('/post', (req, res) => {
    const {userId, mentionId, stars, comment} = req.body;

    if (stars < 1 || stars > 5) {
        return res.json({
            success: false,
            message: "Star count out of range."
        })
    }

    User.findOne({_id: userId}, (err, user) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: User not found"
            });
        }

        if (user.userType !== 'student') {
            return res.json({
                success: false,
                message: "Error: Tutors cannot post testimonials"
            });
        }

        if (mentionId) {
            User.findOne({_id: mentionId}, (err, mentioned) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Error: Server Error"
                    });
                }

                if (mentioned.userType !== "tutor") {
                    return res.json({
                        success: false,
                        message: "Error: Specified mention is not a tutor."
                    });
                }

                const newTestimonial = new Testimonial({
                    fromUser: user._id,
                    toUser: mentioned._id,
                    stars,
                    comment
                })

                newTestimonial.save((err, test) => {
                    if (err) {
                        return res.json({
                            success: false,
                            message: "Error: Server Error"
                        });
                    }
    
                    return res.json({
                        success: true,
                        message: "Testimonial Posted.",
                        testimonial: test
                    })
                })
            })
        } else {
            const newTestimonial = new Testimonial({
                fromUser: user._id,
                stars,
                comment
            })

            newTestimonial.save((err, test) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Error: Server Error"
                    });
                }

                return res.json({
                    success: true,
                    message: "Testimonial Posted.",
                    testimonial: test
                })
            })
        }
        
    })
})

router.get('/general', (req, res) => {
    Testimonial.find({toUser: null}, (err, testimonials) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            });
        }

        return res.json({
            success: true,
            testimonials
        })
    })
})


router.get('/tutor', (req, res) => {
    const {tutor} = req.query;

    User.findOne({_id: tutor}, (err, user) => {
        if (err) {
            return res.json({
                success: false,
                message: "Error: Server Error"
            });
        }

        if (user.userType !== 'tutor') {
            return res.json({
                success: false,
                message: "Error: Specified user is not tutor."
            });
        }

        Testimonial.find({toUser: user._id}, (err, testimonials) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Error: Server Error"
                });
            }

            return res.json({
                success: true,
                testimonials
            })
        })
    })
})

module.exports = router;