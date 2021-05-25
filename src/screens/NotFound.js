import React from 'react'
import Navigation from '../components/Navigation'
import ScrollToTop from '../components/ScrollToTop'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <div className='container p-5 m-5'>
        <h1>Page not found</h1>
      </div>
    </>
  )
}
