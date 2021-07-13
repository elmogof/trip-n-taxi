import React from 'react'
import Navigation from '../components/Navigation'
import ScrollToTop from '../components/ScrollToTop'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function SiteMap() {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <div className='container d-flex flex-column pt-5 my-5'>
        <h1 style={{ color: '#415165' }}>Site Map</h1>
        <Link
          to='/'
          className='fs-5 py-2 text-decoration-none'
          style={{ color: '#415165' }}
        >
          Home Page
        </Link>
        <HashLink
          to='/#services'
          className='fs-5 py-2 text-decoration-none'
          style={{ color: '#415165' }}
        >
          Services
        </HashLink>
        <ul className='list-item'>
          <li className='py-1'>
            <Link
              to='/tours'
              className='fs-5 text-decoration-none'
              style={{ color: '#415165' }}
            >
              Tours
            </Link>
          </li>
          <li className='py-1'>
            <Link
              to='/taxi-service'
              className='fs-5 text-decoration-none'
              style={{ color: '#415165' }}
            >
              Taxi Service
            </Link>
          </li>
          <li className='py-1'>
            <Link
              to='airport-shuttle'
              className='fs-5 text-decoration-none'
              style={{ color: '#415165' }}
            >
              Airport Transfer Service
            </Link>
          </li>
        </ul>

        <Link
          to='/about-us'
          className='fs-5 py-2 text-decoration-none'
          style={{ color: '#415165' }}
        >
          About Us
        </Link>
        <HashLink
          to='/site-map/#contact'
          className='fs-5 py-2 text-decoration-none'
          style={{ color: '#415165' }}
        >
          Contact
        </HashLink>
      </div>
    </>
  )
}
