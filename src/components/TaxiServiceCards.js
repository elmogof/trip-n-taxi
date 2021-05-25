import React from 'react'
import tverde from '../media/verde.png'

export default function TaxiServiceCards(props) {
  return (
    <div className='container-fluid d-flex flex-column pb-lg-0 px-3 px-sm-5 px-lg-0 py-5'>
      <h1 className='fw-bold text-center' style={{ color: '#415165' }}>
        PRIVATE TRANSPORTATION AROUND
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
                className='fs-6 text-center fw-bold'
                style={{ color: '#415165' }}
              >
                PRICE: {s.currency} {s.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <a
        className='btn mx-auto btn-lg fw-bold'
        href='/'
        style={{ backgroundColor: '#9ed0c9', color: '#415165' }}
        role='button'
      >
        CONTACT HENRY
      </a>
      <div
        className='d-none d-lg-inline to-back'
        style={{ marginTop: '-7rem' }}
      >
        <img
          className='float-start rotate-270 decoration'
          src={tverde}
          alt=''
          height='200'
          width='200'
        />
      </div>
    </div>
  )
}
