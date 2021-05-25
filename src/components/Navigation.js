import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import logo from '../media/logo.png'
import { HashLink } from 'react-router-hash-link'

export default function Navigation(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        variant='dark'
        className='py-1 fixed-top shadow-sm'
        style={{ background: '#415164' }}
      >
        <Navbar.Brand href='/' className='ms-4 ms-lg-5 ps-lg-5'>
          <img
            className='img-fluid'
            src={logo}
            alt='tripntaxi logo'
            width='60'
          />
        </Navbar.Brand>
        <Navbar.Toggle className='me-3' aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='ms-2 justify-content-end'
        >
          <Nav className='mr-auto pe-5'>
            <Link
              to='/tours'
              className='text-white fs-5 py-2 px-4 text-decoration-none'
            >
              Tours
            </Link>
            {/* <Nav.Link
              href='/#services'
              className='text-white fs-5 px-4 text-decoration-none'
            >
              Services
            </Nav.Link> */}
            <HashLink
              to='/#services'
              className='text-white fs-5 py-2 px-4 text-decoration-none'
            >
              Services
            </HashLink>
            <Link
              to='/about-us'
              className='text-white fs-5 py-2 px-4 text-decoration-none'
            >
              About Us
            </Link>
            {/* <Nav.Link
              href='/#contact'
              className='text-white fs-5 px-4 text-decoration-none'
            >
              Contact
            </Nav.Link> */}
            <HashLink
              to={`${props.url}/#contact`}
              className='text-white fs-5 py-2 px-4 text-decoration-none'
            >
              Contact
            </HashLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
