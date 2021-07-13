import React from 'react'
import tverde from '../media/verde.png'
import tazul from '../media/azul.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(' ', '%20')
    .replace(/^\w/, (c) => c.toUpperCase())
}

export default function AirportShuttleServiceCards({ data }) {
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
          height='200'
          width='200'
        />
      </div>
      <h1 className='fw-bold text-center' style={{ color: '#415165' }}>
        AIRPORT TRANFERS
      </h1>
      <div className='d-flex flex-column flex-xl-row justify-content-center py-3 px-lg-5'>
        {data.map((service) => (
          <div
            className='col-xl d-flex flex-column border-lime m-2 justify-content-between flex-md-row flex-xl-column py-3 px-3'
            key={service.id}
          >
            <div className='d-flex justify-content-center'>
              <img
                className='align-self-center fit-img'
                src={service.img_url}
                alt={service.alt_attribute}
              />
            </div>
            <div className='d-flex flex-grow-1 flex-xl-grow-0 flex-column justify-content-center ps-0 ps-lg-5 ps-xl-0 pt-3 pt-md-0 pt-lg-3'>
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
                className='fs-6 text-center fw-bold m-0'
                style={{ color: '#415165' }}
              >
                PRICE (1-4 passengers): US$ {service.currency} {service.price}
              </p>
              <p
                className='fs-6 text-center fw-bold'
                style={{ color: '#415165' }}
              >
                Additional person: US$ {service.price / 4}
              </p>
              <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center'>
                <a
                  className={`btn fw-bold mb-2 mb-lg-0 me-lg-1`}
                  href={`https://wa.me/50686311727?text=Hi!%20We%20would%20like%20some%20information%20about%20${normalizeText(
                    service.title
                  )}%20shuttle%20service`}
                  style={{ backgroundColor: '#9ed0c9', color: '#415165' }}
                  role='button'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon
                    icon={['fab', 'whatsapp']}
                    fixedWidth
                    transform='grow-6'
                    color='#415165'
                  />{' '}
                  {'Reserve a drive'}
                </a>
                <a
                  className={`btn fw-bold text-capitalize px-4 ms-lg-1`}
                  href='tel:(+506) 86311727'
                  style={{ backgroundColor: '#415165', color: '#9ed0c9' }}
                  role='button'
                >
                  <FontAwesomeIcon
                    icon={['fas', 'phone']}
                    fixedWidth
                    color='#9ed0c9'
                  />{' '}
                  call us
                </a>
              </div>
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
