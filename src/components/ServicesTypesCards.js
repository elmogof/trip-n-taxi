import React from 'react'
import tazul from '../media/azul.png'
import { Link } from 'react-router-dom'

export default function ServicesTypesCards({ data }) {
  return (
    <>
      <div
        id='services'
        className='container-fluid d-flex flex-column p-lg-0 py-5 px-3'
      >
        <div
          className='d-none d-lg-inline to-back'
          style={{ marginBottom: '-7rem' }}
        >
          <img
            className='float-start decoration'
            src={tazul}
            alt=''
            height='200'
            width='200'
          />
        </div>
        <h1 className='fw-bold text-center' style={{ color: '#415165' }}>
          SERVICES
        </h1>
        <div className='d-flex flex-column flex-xl-row justify-content-center py-3 px-lg-5'>
          {data.length > 0 ? data.map((serviceType) => (
            <div
              className='col-lg d-flex flex-column justify-content-between flex-md-row flex-xl-column py-4 py-lg-3 text-center px-3'
              key={serviceType.id}
            >
              <div className='d-flex justify-content-center'>
                <img
                  className='align-self-center'
                  src={serviceType.img_url}
                  alt={serviceType.alt_attribute}
                  height='190'
                />
              </div>
              <div className='d-flex flex-column justify-content-between ps-0 ps-md-5 ps-xl-0 pt-3 pt-md-0 pt-lg-3'>
                <h4 className='text-center' style={{ color: '#415165' }}>
                  {serviceType.title}
                </h4>
                <p className='fs-6 text-center' style={{ color: '#415165' }}>
                  {serviceType.description}
                </p>
                <div className=''>
                  <Link
                    className='btn mx-auto fw-bold'
                    to={serviceType.service_type_url}
                    style={{ backgroundColor: '#9ed0c9', color: '#415165' }}
                    role='button'
                  >
                    OPTIONS AND FEES
                  </Link>
                </div>
              </div>
            </div>
          )) : <></>
          }
        </div>
        <br />
        <div
          className='d-none d-lg-inline to-back'
          style={{ marginTop: '-7rem' }}
        >
          <img
            className='float-end rotate-180 decoration'
            src={tazul}
            alt=''
            height='200'
            width='200'
          />
        </div>
      </div>
    </>
  )
}
