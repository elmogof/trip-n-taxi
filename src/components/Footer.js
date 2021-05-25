import React from 'react'
import footer_circle from '../media/footer-circles.png'
import tripadvisor from '../media/tripadvisor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import listicaLogo from '../media/listica-logo.png'
import logo from '../media/logo.png'

export default function Footer() {
  const iconNames = [
    {
      id: 1,
      type: 'fas',
      name: 'envelope',
      color: '#9fc247',
      url: 'mailto:info@tripntaxi.com',
    },
    {
      id: 2,
      type: 'fas',
      name: 'phone',
      color: 'gray',
      url: 'tel:(+506) 84377472',
    },
    {
      id: 3,
      type: 'fab',
      name: 'telegram-plane',
      color: '#0088cc',
      url: 'https://t.me/tripntaxi',
    },
    {
      id: 4,
      type: 'fab',
      name: 'whatsapp',
      color: '#25d366',
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
        <div className='col-lg d-flex py-2 py-lg-0 ps-lg-4 justify-content-center align-items-center'>
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
        <div className='col-lg d-flex flex-lg-column flex-wrap py-3 py-lg-0 justify-content-center align-items-center'>
          <div
            className='mx-2 m-lg-1 rounded'
            style={{
              background: '#3b5998',
            }}
          >
            <a
              href='https://facebook.com/tripntaxi'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                className='pt-3'
                icon={['fab', 'facebook-f']}
                size='3x'
                fixedWidth
                inverse
              />
            </a>
          </div>
          {iconNames.map((i) => {
            return (
              <div
                className='mx-2 m-lg-1 rounded'
                key={i.id}
                style={{
                  background: i.color,
                }}
              >
                <a href={i.url} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon
                    className='py-2'
                    icon={[i.type, i.name]}
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
      <div className='container-fluid py-3'>
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
