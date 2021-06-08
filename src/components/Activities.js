import React from 'react'
import tazul from '../media/azul.png'
import ContactButtons from './ContactButtons'

export default function Activities({ data }) {
  return (
    <div className='container-fluid d-flex flex-column py-5 pt-lg-0 px-3 px-sm-5 px-lg-0'>
      <div
        className='d-none d-lg-inline to-back'
        style={{ marginBottom: '-7rem' }}
      >
        <img
          className='float-end rotate-90 decoration'
          src={tazul}
          alt=''
          height='200'
          width='200'
        />
      </div>
      <h1 className='fw-bold text-center' style={{ color: '#415165' }}>
        TAXI TAMARINDO AREA
      </h1>
      <div className='d-flex flex-column flex-xl-row justify-content-center py-3 px-lg-5'>
        {data.map((activities) => (
          <div
            className='col-lg d-flex flex-column border-lime m-2 justify-content-center flex-md-row flex-xl-column py-3 px-3'
            key={activities.id}
          >
            <div className='d-flex justify-content-center'>
              <img
                className='align-self-center fit-img'
                src={activities.img_url}
                alt='...'
              />
            </div>
            <div className='d-flex flex-column justify-content-center ps-0 ps-md-5 ps-xl-0 pt-3 pt-md-0 pt-lg-3'>
              <h4 className='text-center' style={{ color: '#415165' }}>
                {activities.title}
              </h4>
              <p className='fs-6 text-center ' style={{ color: '#415165' }}>
                {activities.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <ContactButtons
        btnSize='btn-lg'
        btnText='Contact Henry'
        url='https://wa.me/50686311727?text=Hi!%20We%20need%20a%20taxi%20service'
      />
    </div>
  )
}
