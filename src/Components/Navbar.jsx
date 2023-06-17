import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="/">Start Bootstrap</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-a py-3 px-0 px-lg-3 text-white rounded" to="/portfolio">Portfolio</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-a py-3 px-0 px-lg-3 text-white rounded" to="/about">About</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-a py-3 px-0 px-lg-3 text-white rounded" to="/contact">Contact</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-a py-3 px-0 px-lg-3 text-white rounded" to="/posts">Posts</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
