import React from 'react'
import tverde from '../media/verde.png'
import tazul from '../media/azul.png'

export default function AirportShuttleServiceCards(props) {
  return (
    <div className='container-fluid d-flex flex-column px-3 px-sm-5 p-lg-0 p-5'>
      <div
        className='d-none d-lg-inline to-back'
        style={{ marginBottom: '-7rem' }}
      >
        <img
          className='float-end rotate-90'
          src={tazul}
          alt=''
          height='150'
          width='150'
        />
      </div>
      <h1 className='fw-bold text-center' style={{ color: '#415165' }}>
        AIRPORT TRANFERS
      </h1>
      <div className='d-flex flex-column flex-xl-row justify-content-center py-3 px-lg-5'>
        {props.data.map((s) => (
          <div
            className='col-lg d-flex flex-column border-lime m-2 justify-content-between flex-md-row flex-xl-column py-3 px-3'
            key={s.id}
          >
            <div className='d-flex justify-content-center'>
              <img
                className='align-self-center'
                src={s.img_url}
                alt='...'
                height='190'
              />
            </div>
            <div className='d-flex flex-column justify-content-center ps-0 ps-md-5 ps-xl-0 pt-3 pt-md-0 pt-lg-3'>
              <h4 className='text-center' style={{ color: '#415165' }}>
                {s.title}
              </h4>
              <p className='fs-6 text-center ' style={{ color: '#415165' }}>
                {s.description}
              </p>
              <p
                className='fs-6 text-center fw-bold m-0'
                style={{ color: '#415165' }}
              >
                PRICE (1-4 passengers): {s.currency} {s.price}
              </p>
              <p
                className='fs-6 text-center fw-bold'
                style={{ color: '#415165' }}
              >
                Additional person: {s.currency} {s.price / 4}
              </p>
              <a
                className='btn mx-auto fw-bold'
                href='/'
                style={{ backgroundColor: '#9ed0c9', color: '#415165' }}
                role='button'
              >
                RESERVE DRIVE
              </a>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div
        className='d-none d-lg-inline to-back'
        style={{ marginTop: '-5rem' }}
      >
        <img
          className='float-start rotate-270 decoration'
          src={tverde}
          alt=''
          height='150'
          width='150'
        />
      </div>
    </div>
  )
}
