import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import logo from '../media/logo-nav.png'
import { HashLink } from 'react-router-hash-link'

export default function Navigation({ url }) {
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
            height='60'
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
            <HashLink
              to={`${url}/#contact`}
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
