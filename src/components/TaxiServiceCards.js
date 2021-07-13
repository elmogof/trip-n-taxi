import React from 'react'
import tverde from '../media/verde.png'
import ContactButtons from './ContactButtons'

export default function TaxiServiceCards(props) {
  return (
    <div className='container-fluid d-flex flex-column pb-lg-0 px-3 px-sm-5 px-lg-0 py-5'>
      <h1 className='fw-bold text-center' style={{ color: '#415165' }}>
        PRIVATE TRANSPORTATION AROUND
      </h1>
      <div className='d-flex flex-column flex-xl-row flex-wrap justify-content-center py-3 px-lg-5'>
        {props.data.map((service) => (
          <div
            className='col-xl d-flex flex-column border-lime m-2 justify-content-between flex-md-row flex-xl-column py-3 px-3'
            key={service.id}
          >
            <div className='d-flex justify-content-center'>
              <img
                className='align-self-center fit-img'
                src={service.img_url}
                alt='...'
              />
            </div>
            <div className='d-flex flex-column flex-grow-1 flex-xl-grow-0 justify-content-center ps-0 ps-md-5 ps-xl-0 pt-3 pt-md-0 pt-lg-3'>
              <h4
                className='text-center text-break'
                style={{ color: '#415165' }}
              >
                {service.title}
              </h4>
              <p
                className='fs-6 text-center text-break'
                style={{ color: '#415165' }}
              >
                {service.description}
              </p>
              <p
                className='fs-6 text-center fw-bold'
                style={{ color: '#415165' }}
              >
                PRICE: US$ {service.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <ContactButtons
        btnSize='btn-lg'
        btnText='Contact Henry'
        url='https://wa.me/50686311727?text=Hi!%20We%20need%20a%20transportation%20service%20in%20the%20area'
      />
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
