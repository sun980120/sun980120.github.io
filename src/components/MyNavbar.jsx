// components/Navbar.js
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="#home">HongWooSung</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {/*<Link className="nav-link" to="home-section" spy={true} smooth={true} duration={500}>Home</Link>*/}
                    <Link className="nav-link" to="about-section" spy={true} smooth={true} duration={500}>About</Link>
                    <Link className="nav-link" to="education-section" spy={true} smooth={true} duration={500}>Education</Link>
                    {/*<Link className="nav-link" to="career-section" spy={true} smooth={true} duration={500}>Career</Link>*/}
                    <Link className="nav-link" to="projects-section" spy={true} smooth={true} duration={500}>Projects</Link>
                    <Link className="nav-link" to="sub-projects-section" spy={true} smooth={true} duration={500}>Side Projects</Link>
                    <Link className="nav-link" to="my-blog-section" spy={true} smooth={true} duration={500}>My Blog</Link>
                    <Link className="nav-link" to="contact-section" spy={true} smooth={true} duration={500}>Contact</Link>
                    {/* 추가 링크들 */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
