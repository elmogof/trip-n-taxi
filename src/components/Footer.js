import React from 'react'
import footer_circle from '../media/footer-circles.png'
import tripadvisor from '../media/tripadvisor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom'
import listicaLogo from '../media/listica-logo.png'
import logo from '../media/logo.png'

export default function Footer() {
  const iconNames = [
    {
      id: 1,
      type: 'fab',
      name: 'facebook-square',
      url: 'https://facebook.com/tripntaxi',
    },
    {
      id: 2,
      type: 'fas',
      name: 'envelope',
      url: 'mailto:henrychavesrosales@gmail.com',
    },
    {
      id: 3,
      type: 'fab',
      name: 'telegram-plane',
      url: 'https://t.me/tripntaxi',
    },
    {
      id: 4,
      type: 'fab',
      name: 'whatsapp',
      url: 'https://wa.me/50686311727',
    },
  ]
  return (
    <div
      id='contact'
      className='container-fluid d-flex flex-column pt-5 pt-lg-0 px-0 ng-view'
      autoscroll='true'
      style={{ background: '#415165' }}
    >
      <div className='d-none d-lg-inline' style={{ marginBottom: '-15rem' }}>
        <img
          className='float-start decoration'
          src={footer_circle}
          alt=''
          width='400'
        />
      </div>
      <div className='row mx-0 py-0 pt-lg-5'>
        <div className='col-lg d-flex flex-column py-2 py-lg-0 ps-lg-4 justify-content-center align-items-center'>
          <div>
            <a
              href='https://www.tripadvisor.es/Attraction_Review-g309253-d12236155-Reviews-Trip_N_Taxi-Tamarindo_Province_of_Guanacaste.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='mx-auto'
                src={tripadvisor}
                alt='TripAdvisor'
                width='300'
              />
            </a>
          </div>
        </div>
        <div className='col-lg py-2 py-lg-0 d-flex justify-content-center align-items-center'>
          <div>
            <img
              className='img-fluid'
              src={logo}
              alt='tripntaxi logo'
              width='250'
            />
          </div>
        </div>
        <div className='col-lg d-flex flex-column py-4 py-lg-0 justify-content-center align-items-center'>
          <p className='text-center text-white text-uppercase fw-bold fs-4'>
            call us
          </p>
          <p>
            <a
              className='text-center text-white text-uppercase fs-5 fw-bold text-decoration-none'
              href='tel:(+506) 86311727'
              target='_blank'
              rel='noopener noreferrer'
            >
              (+506) 8631 1727
            </a>
          </p>
          <p className='text-center text-white text-uppercase fw-bold fs-4'>
            also contact us at
          </p>
          <div className='d-flex flex-row'>
            {iconNames.map((icon) => {
              return (
                <div className='m-2 m-lg-1 rounded' key={icon.id}>
                  <a href={icon.url} target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon
                      icon={[icon.type, icon.name]}
                      size='3x'
                      fixedWidth
                      inverse
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='container-fluid d-flex justify-content-end py-3'>
        {/* <Link
          to='/site-map'
          className='text-white fs-6 fw-bold py-2 px-4 text-decoration-none'
        >
          Site map
        </Link> */}
        <div>
          <img
            className='float-end'
            src={listicaLogo}
            alt='listica'
            height='25'
          />
        </div>
      </div>
    </div>
  )
}
