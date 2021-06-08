import React from 'react'
import Navigation from '../components/Navigation'
import ScrollToTop from '../components/ScrollToTop'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <div className='container py-5 my-5' style={{ height: '16.5vw' }}>
        <h1 style={{ color: '#415165' }}>Page not found</h1>
        <Link
          to='/'
          className='fs-5 py-2 text-decoration-none'
          style={{ color: '#415165' }}
        >
          Back to homepage
        </Link>
      </div>
    </>
  )
}
