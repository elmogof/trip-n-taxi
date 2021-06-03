import React from 'react'
import tverde from '../media/verde.png'
import henry from '../media/about-us.png'
import Navigation from '../components/Navigation'
import ScrollToTop from '../components/ScrollToTop'

export default function AboutUs() {
  return (
    <>
      <ScrollToTop />
      <Navigation url={'/about-us'} />
      <div className='container-fluid d-flex flex-column mt-5 px-0 py-5 pt-lg-0'>
        <div className='d-none d-lg-inline' style={{ marginBottom: '-7rem' }}>
          <img
            className='float-start decoration'
            src={tverde}
            alt=''
            height='200'
            width='200'
          />
        </div>
        <div className='container-fluid d-flex align-items-center'>
          <div className='col-xl-6 d-none d-xl-flex to-back'>
            <img
              className='img-fluid mx-auto pt-5'
              src={henry}
              alt='foto de don Henry'
            />
          </div>
          <div className='col-xl-6 px-3'>
            <h1
              className='text-center fw-bold mb-3 pt-4 pt-lg-0'
              style={{ color: '#415165' }}
            >
              ABOUT US
            </h1>
            <p className='text-justify fs-4' style={{ color: '#415165' }}>
              Henry Chaves lives in Villarreal and is a well known member of the
              community. At the time he started his business he was a solo tour
              and taxi driver. 20 years later he has driven thousands of miles
              around the country, has a solid company and goes on enjoying his
              work.
            </p>
            <p className='text-justify fs-4' style={{ color: '#415165' }}>
              Now he has a team that shares his same love for the country and a
              passionate pride to show the best spots in their best season.
            </p>
            <p className='text-justify fs-4' style={{ color: '#415165' }}>
              Being from Guanacaste, Henry knows well the culture and traditions
              of the province. His guided tours are a mix of adventure, family
              trip and dive-in Costa Rican culture.
            </p>

            <p className='text-justify fs-4' style={{ color: '#415165' }}>
              English speaking, reliable and always on time, Henry and his team
              treat each drive and passenger as a special one, and make sure
              that everyone lives the real experience of Costa Rica.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
