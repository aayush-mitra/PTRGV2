import React, {useRef} from 'react';
import './index.css'

import {Navigation} from '../../components'

export default function LandingPage() {

    

    return (
        <div classname="body">
        <Navigation />
        <main>
            <div className="text-section">
            <div className="hero-text">
                Need Academic Assistance? <br />
                <span style={{ color: "#ffbd59" }}>We're Here to Help.</span>
            </div>
            <div className="subtext">
                PTRGV<sup>2</sup> is an organization led by students in the Rio Grande
                Valley, dedicated to providing supplementary tutoring to fellow
                students. We offer tutoring in a multitude of subjects at a variety of
                levels, including Mathematics, English, History, Physics, Chemistry,
                Biology, and Computer Science.
            </div>
            <div className="buttons">
                <a href="learnmore.html">
                <div className="learnmore-button">Learn More</div>
                </a>
                <a href="/auth?tab=register">
                <div className="register-button">Register</div>
                </a>
            </div>
            </div>
            <div className="triangle" />
        </main>
        <section className="subjects">
            <h1>Subjects Offered</h1>
            <div className="subjects-boxes">
            <div className="subject-box">
                <div className="subject-title">
                <img
                    src="https://i.pinimg.com/550x/04/64/6b/04646bc6ef384e1c564b25df6ef17291.jpg"
                    alt=""
                    className="subject-image"
                />
                <h2>Math</h2>
                </div>
                <div className="subject-content">
                <ul>
                    <li>Pre-Algebra</li>
                    <li>Algebra 1</li>
                    <li>Geometry</li>
                </ul>
                <button className="subject-more-info">Click for More Info</button>
                </div>
            </div>
            <div className="subject-box">
                <div className="subject-title">
                <img
                    src="https://i.pinimg.com/550x/04/64/6b/04646bc6ef384e1c564b25df6ef17291.jpg"
                    alt=""
                    className="subject-image"
                />
                <h2>English</h2>
                </div>
                <div className="subject-content">
                <ul>
                    <li>Middle School English</li>
                    <li>English 1</li>
                    <li>English 2</li>
                </ul>
                <button className="subject-more-info">Click for More Info</button>
                </div>
            </div>
            <div className="subject-box">
                <div className="subject-title">
                <img
                    src="https://i.pinimg.com/550x/04/64/6b/04646bc6ef384e1c564b25df6ef17291.jpg"
                    alt=""
                    className="subject-image"
                />
                <h2>Science</h2>
                </div>
                <div className="subject-content">
                <ul>
                    <li>IPC</li>
                    <li>Biology Pre-AP</li>
                    <li>Chemistry Pre-AP</li>
                </ul>
                <button className="subject-more-info">Click for More Info</button>
                </div>
            </div>
            <div className="subject-box">
                <div className="subject-title">
                <img
                    src="https://i.pinimg.com/550x/04/64/6b/04646bc6ef384e1c564b25df6ef17291.jpg"
                    alt=""
                    className="subject-image"
                />
                <h2>History</h2>
                </div>
                <div className="subject-content">
                <ul>
                    <li>World Geography</li>
                    <li>AP World History</li>
                    <li>AP U.S. History</li>
                </ul>
                <button className="subject-more-info">Click for More Info</button>
                </div>
            </div>
            <div className="subject-box">
                <div className="subject-title">
                <img
                    src="https://i.pinimg.com/550x/04/64/6b/04646bc6ef384e1c564b25df6ef17291.jpg"
                    alt=""
                    className="subject-image"
                />
                <h2>Comp. Sci</h2>
                </div>
                <div className="subject-content">
                <ul>
                    <li>AP CSP</li>
                    <li>AP CSA</li>
                    <li>Python</li>
                </ul>
                <button className="subject-more-info">Click for More Info</button>
                </div>
            </div>
            </div>
            <div className="subject-modal">
            <div className="subject-modal-wrapper">
                <div className="subject-modal-wrapper-header">
                <div className="subject-modal-wrapper-header-title">
                    <img
                    src="https://i.pinimg.com/550x/04/64/6b/04646bc6ef384e1c564b25df6ef17291.jpg"
                    alt=""
                    className="subject-modal-wrapper-header-pfp"
                    />
                    <h2>Math</h2>
                </div>
                <div className="subject-modal-wrapper-header-close">X</div>
                </div>
                <div className="subject-modal-wrapper-content">
                <div className="subject-modal-wrapper-content-sidebar">
                    <ul>
                    <li className="m-sel">Pre-Algebra</li>
                    <li>Algebra 1</li>
                    <li>Geometry</li>
                    <li>Algebra 2</li>
                    <li>Pre-Calculus</li>
                    <li>Calculus</li>
                    <li>AP Calculus AB</li>
                    <li>AP Calculus BC</li>
                    </ul>
                </div>
                <div
                    className="subject-modal-wrapper-content-main"
                    style={{ display: "flex" }}
                >
                    <div className="subject-modal-wrapper-content-main-course-section">
                    <h3>Pre-Algebra</h3>
                    <p>
                        Our Pre-Algebra course is designed to help students who are
                        struggling with the basics of Algebra. We will cover topics such
                        as fractions, decimals, and basic equations. This course is
                        designed for students in 6th-8th grade.
                    </p>
                    </div>
                    <div className="subject-modal-wrapper-content-main-course-section">
                    <h3>Tutors for this course</h3>
                    <div className="subject-modal-wrapper-content-main-tutors">
                        <div className="subject-modal-wrapper-content-main-tutor">
                        <img
                            src="https://i.scdn.co/image/ab676161000051746003f54411b80a01d56a32cf"
                            alt=""
                            className="subject-modal-wrapper-content-main-tutor-pfp"
                        />
                        <h4>John Doe</h4>
                        </div>
                        <div className="subject-modal-wrapper-content-main-tutor">
                        <img
                            src="https://i.scdn.co/image/ab676161000051746003f54411b80a01d56a32cf"
                            alt=""
                            className="subject-modal-wrapper-content-main-tutor-pfp"
                        />
                        <h4>John Doe</h4>
                        </div>
                        <div className="subject-modal-wrapper-content-main-tutor">
                        <img
                            src="https://i.scdn.co/image/ab676161000051746003f54411b80a01d56a32cf"
                            alt=""
                            className="subject-modal-wrapper-content-main-tutor-pfp"
                        />
                        <h4>John Doe</h4>
                        </div>
                        <div className="subject-modal-wrapper-content-main-tutor">
                        <img
                            src="https://i.scdn.co/image/ab676161000051746003f54411b80a01d56a32cf"
                            alt=""
                            className="subject-modal-wrapper-content-main-tutor-pfp"
                        />
                        <h4>John Doe</h4>
                        </div>
                        <div className="subject-modal-wrapper-content-main-tutor">
                        <img
                            src="https://i.scdn.co/image/ab676161000051746003f54411b80a01d56a32cf"
                            alt=""
                            className="subject-modal-wrapper-content-main-tutor-pfp"
                        />
                        <h4>John Doe</h4>
                        </div>
                        <div className="subject-modal-wrapper-content-main-tutor">
                        <img
                            src="https://i.scdn.co/image/ab676161000051746003f54411b80a01d56a32cf"
                            alt=""
                            className="subject-modal-wrapper-content-main-tutor-pfp"
                        />
                        <h4>John Doe</h4>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="subject-modal-wrapper-content-main">
                    <div className="subject-modal-wrapper-content-main-course-section">
                    <h3>Algebra 1</h3>
                    <p>
                        Our Pre-Algebra course is designed to help students who are
                        struggling with the basics of Algebra. We will cover topics such
                        as fractions, decimals, and basic equations. This course is
                        designed for students in 6th-8th grade.
                    </p>
                    </div>
                    <div className="subject-modal-wrapper-content-main-course-section">
                    <h4>Tutors for this course</h4>
                    <div className="subject-modal-wrapper-content-main-tutors" />
                    </div>
                </div>
                <div className="subject-modal-wrapper-content-main">
                    <div className="subject-modal-wrapper-content-main-course-section">
                    <h3>Pre-Algebra</h3>
                    <p>
                        Our Pre-Algebra course is designed to help students who are
                        struggling with the basics of Algebra. We will cover topics such
                        as fractions, decimals, and basic equations. This course is
                        designed for students in 6th-8th grade.
                    </p>
                    </div>
                    <div className="subject-modal-wrapper-content-main-course-section">
                    <h3>Tutors for this course</h3>
                    <div className="subject-modal-wrapper-content-main-tutors" />
                    </div>
                </div>
                <div className="subject-modal-wrapper-content-main">
                    <div className="subject-modal-wrapper-content-main-course-section">
                    <h3>Pre-Algebra</h3>
                    <p>
                        Our Pre-Algebra course is designed to help students who are
                        struggling with the basics of Algebra. We will cover topics such
                        as fractions, decimals, and basic equations. This course is
                        designed for students in 6th-8th grade.
                    </p>
                    </div>
                    <div className="subject-modal-wrapper-content-main-course-section">
                    <h3>Tutors for this course</h3>
                    <div className="subject-modal-wrapper-content-main-tutors" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="testimonials">
            <div className="arrows">
            <div className="arrow ar-up">^</div>
            <div className="arrow ar-dwn">^</div>
            </div>
            <div className="carousel-wrapper">
            <div className="carousel">
                <div className="testimonial">
                <div className="testimonial-author">
                    <img
                    src="https://i.pinimg.com/550x/04/64/6b/04646bc6ef384e1c564b25df6ef17291.jpg"
                    alt=""
                    className="subject-image"
                    />
                    John Doe
                </div>
                <div className="testimonial-content">
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
                    error quis reprehenderit quos voluptatem porro eaque alias ipsam
                    quod, est autem veniam dolores delectus nostrum molestias et
                    repellendus, hic pariatur.
                    </p>
                    <div className="stars">
                    <svg
                        fill="#ffbd59"
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#ffbd59"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#ffbd59"
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#ffbd59"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#ffbd59"
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#ffbd59"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#c3c3c3"
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#c3c3c3"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#c3c3c3"
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#c3c3c3"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    </div>
                </div>
                </div>
                <div className="testimonial">
                <div className="testimonial-author">
                    <img
                    src="https://i.pinimg.com/550x/04/64/6b/04646bc6ef384e1c564b25df6ef17291.jpg"
                    alt=""
                    className="subject-image"
                    />
                    Jane Doe
                </div>
                <div className="testimonial-content">
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
                    error quis reprehenderit quos voluptatem porro eaque alias ipsam
                    quod, est autem veniam dolores delectus nostrum molestias et
                    repellendus, hic pariatur.
                    </p>
                    <div className="stars">
                    <svg
                        fill="#ffbd59"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#ffbd59"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#ffbd59"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#ffbd59"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#ffbd59"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#ffbd59"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#c3c3c3"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#c3c3c3"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#c3c3c3"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#c3c3c3"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    </div>
                </div>
                </div>
                <div className="testimonial">
                <div className="testimonial-author">
                    <img
                    src="https://i.pinimg.com/550x/04/64/6b/04646bc6ef384e1c564b25df6ef17291.jpg"
                    alt=""
                    className="subject-image"
                    />
                    Nikhil Khatwani the 3rd
                </div>
                <div className="testimonial-content">
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
                    error quis reprehenderit quos voluptatem porro eaque alias ipsam
                    quod, est autem veniam dolores delectus nostrum molestias et
                    repellendus, hic pariatur.
                    </p>
                    <div className="stars">
                    <svg
                        fill="#ffbd59"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#ffbd59"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#ffbd59"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#ffbd59"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#ffbd59"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#ffbd59"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#c3c3c3"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#c3c3c3"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#c3c3c3"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#c3c3c3"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    </div>
                </div>
                </div>
                <div className="testimonial">
                <div className="testimonial-author">
                    <img
                    src="https://i.pinimg.com/550x/04/64/6b/04646bc6ef384e1c564b25df6ef17291.jpg"
                    alt=""
                    className="subject-image"
                    />
                    Aayush Mitra the 4th
                </div>
                <div className="testimonial-content">
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
                    error quis reprehenderit quos voluptatem porro eaque alias ipsam
                    quod, est autem veniam dolores delectus nostrum molestias et
                    repellendus, hic pariatur.
                    </p>
                    <div className="stars">
                    <svg
                        fill="#ffbd59"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#ffbd59"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#ffbd59"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#ffbd59"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#ffbd59"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#ffbd59"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#c3c3c3"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#c3c3c3"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    <svg
                        fill="#c3c3c3"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="star-svg"
                    >
                        <path
                        fill="#c3c3c3"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </svg>
                    </div>
                </div>
                </div>
            </div>
            <div className="arrows-hidden">
                <div className="arrow ar-right">&lt;</div>
                <div className="arrow ar-left">&gt;</div>
            </div>
            </div>
            <div className="markers">
            <div className="marker active" />
            <div className="marker" />
            <div className="marker" />
            <div className="marker" />
            </div>
        </section>
        <section className="tutor">
            <div className="tutor-wrapper">
            <div className="tutor-stats">
                <h1>Our Tutors</h1>
                <div className="stats-container">
                <div className="tutor-stat">
                    <span className="tutor-number">8+</span> <br />
                    <span className="tutor-subject">Tutors</span>
                </div>
                <div className="tutor-stat">
                    <span className="tutor-number">7+</span> <br />
                    <span className="tutor-subject">Questions Asked</span>
                </div>
                <div className="tutor-stat">
                    <span className="tutor-number">3+</span> <br />
                    <span className="tutor-subject">Learners</span>
                </div>
                <div className="tutor-stat">
                    <span className="tutor-number">2+</span> <br />
                    <span className="tutor-subject">Hours Tutored</span>
                </div>
                <div className="tutor-stat">
                    <span className="tutor-number">15+</span> <br />
                    <span className="tutor-subject">Subjects Offered</span>
                </div>
                <div className="tutor-stat">
                    <span className="tutor-number">4+</span> <br />
                    <span className="tutor-subject">Reviews</span>
                </div>
                </div>
            </div>
            <div className="tutor-paragraph">
                <p>
                Peer Tutoring RGV is a group of students working to provide free high
                quality tutoring on a variety of subjects through video conferencing
                for students across the Rio Grande Valley. Our tutors have taken an
                extensive amount of classes including higher levels such as Dual
                Enrollment, Advanced Placement, and Honors throughout their high
                school career. They aim to share what they have learned with fellow
                students across all grade levels including those in elementary and
                middle school.
                </p>
                <div className="tutor-cards">
                <div className="tutor-card">
                    <img src="/assets/aayush.jpg" alt="" />
                    <div className="tutor-caption">
                    <p>
                        Aayush Mitra <br />
                        <span>Mathematics</span>
                    </p>
                    </div>
                </div>
                <div className="tutor-card">
                    <img src="/assets/vishal.webp" alt="" />
                    <div className="tutor-caption">
                    <p>
                        Vishal Veeramachaneni <br />
                        <span>English</span>
                    </p>
                    </div>
                </div>
                <div className="tutor-card">
                    <img src="/assets/matthew.webp" alt="" />
                    <div className="tutor-caption">
                    <p>
                        Matthew Lin <br />
                        <span>Chemistry</span>
                    </p>
                    </div>
                </div>
                </div>
                <button>View All Tutors &gt;</button>
            </div>
            </div>
        </section>
        <section className="contact">
            <div className="contact-wrapper">
            <div className="contact-top-container">
                <h1>Contact Us</h1>
                <p>Have any questions? Reach out to us!</p>
            </div>
            <div className="separated">
                <form action="">
                <div className="form-group">
                    <label htmlFor="name"> Name </label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="name"> Email </label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="name"> Message </label>
                    <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    defaultValue={""}
                    />
                </div>
                </form>
                <div className="reach-out">
                <div className="socials">
                    <div className="social">
                    <h3>EMAIL</h3>
                    <p>
                        <a href="mailto:ptrgv2@gmail.com"> ptrgv2@gmail.com </a>
                    </p>
                    </div>
                    <div className="social">
                    <h3>DISCORD</h3>
                    <p>
                        <a href="https://discord.gg/UrEKJ4BYWT" target="_blank">
                        PTRGV^2 Discord Server
                        </a>
                    </p>
                    </div>
                    <div className="social">
                    <h3>INSTAGRAM</h3>
                    <p>
                        <a
                        href="https://www.instagram.com/ptrgv.squared/"
                        target="_blank"
                        >
                        @ptrgv.squared
                        </a>
                    </p>
                    </div>
                </div>
                <button className="send-btn">Send Message</button>
                </div>
            </div>
            </div>
        </section>
        <footer>
            <div className="footer-wrapper">
            <div className="footer-left">
                <div className="footer-link-wrapper">
                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/tutors">Tutors</a>
                    <a href="/auth?tab=login">Sign In</a>
                </div>
                <div className="footer-socials">
                    <a href="mailto:ptrgv2@gmail.com">
                    <img src="assets/email.png" alt="" />
                    Email
                    </a>
                    <a href="https://discord.gg/UrEKJ4BYWT" target="_blank">
                    <img src="assets/discord.png" alt="" />
                    Discord
                    </a>
                    <a
                    href="https://instagram.com/ptrgv.squared"
                    target="_blank"
                    className="ig"
                    >
                    <img src="assets/instagram.png" alt="" />
                    Instagram
                    </a>
                </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-logo">
                <img src="assets/RGV.png" alt="" />
                </div>
                <div className="footer-copyright">
                © Peer Tutoring Rio Grande Valley.
                <br />
                All Rights Reserved.
                </div>
            </div>
            </div>
        </footer>
        </div>

    )
}