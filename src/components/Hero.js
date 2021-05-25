import React from 'react'
import hero_img from '../media/hero-img.png'
import buseta from '../media/buseta.png'
import sunset from '../media/sunset.png'
import circle from '../media/circle.png'
import tazul from '../media/azul.png'

function Hero() {
  return (
    <div
      className='container-fluid mt-5 pt-5 pt-lg-0'
      style={{ background: '#9ed0c9' }}
    >
      <div className='row'>
        <div className='col-lg d-flex flex-column justify-content-center ps-lg-5 ms-lg-5'>
          <div className='mx-auto ps-3 px-sm-5'>
            <h1
              className='fw-bold'
              style={{ color: '#415165', fontSize: '60px' }}
            >
              TRIP-N-TAXI
            </h1>
            <p
              className='fs-2 fw-bold'
              style={{ color: '#415165', fontSize: '60px' }}
            >
              Best taxi service and guided tours in Guanacaste - Costa Rica!
            </p>
          </div>
        </div>
        <div className='col-lg d-flex py-4 justify-content-center justify-content-lg-end p-lg-0'>
          <img
            className='img-fluid rounded d-none d-lg-inline'
            src={hero_img}
            alt='Collage decorativo'
          />
          <img
            className='d-lg-none img-fluid mx-3'
            src={buseta}
            alt='Buseta de Don Henry'
            width='100'
            height='100'
          />
          <img
            className='d-lg-none img-fluid mx-3'
            src={circle}
            alt='Decoración'
            width='100'
            height='100'
          />
          <img
            className='d-lg-none img-fluid mx-3'
            src={sunset}
            alt='Atardecer en la playa con surfistas de fondo'
            width='100'
            height='100'
          />
        </div>
        <div
          className='px-0 d-none d-lg-inline'
          style={{ marginTop: '-12.5rem' }}
        >
          <img
            className='float-start rotate-270 decoration'
            src={tazul}
            alt=''
            height='200'
            width='200'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
