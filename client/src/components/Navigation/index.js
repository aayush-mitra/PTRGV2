import React from 'react'

export default function Navigation() {
  return (
    <header>
    <div className="header-wrapper">
      <img src="assets/RGV.png" alt="" onClick={() => {
        window.location.href = '/'
      }} />
      <nav>
        <a href="/">
          <div className="link">Home</div>
        </a>
        <a href="/about">
          <div className="link">About</div>
        </a>
        <a href="/tutors">
          <div className="link">Tutors</div>
        </a>
        <a href="/auth?tab=register">
          <div className="link">Sign In</div>
        </a>
      </nav>
      <div className="hamburger" onclick="openMenu()">
        <div className="hamburger-line" />
        <div className="hamburger-line" />
        <div className="hamburger-line" />
      </div>
      <div className="hamburger-menu-open">
        <div className="hamburger-menu">
          <div className="hamburger-menu-close" onclick="closeMenu()">
            <div className="hamburger-menu-close-line" />
            <div className="hamburger-menu-close-line" />
          </div>
          <div className="hamburger-menu-links">
            <a href="/">
              <div className="hamburger-menu-link">Home</div>
            </a>
            <a href="/about">
              <div className="hamburger-menu-link">About</div>
            </a>
            <a href="/tutors">
              <div className="hamburger-menu-link">Tutors</div>
            </a>
            <a href="/register">
              <div className="hamburger-menu-link">Sign In</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}
