import React from 'react'
import tazul from '../media/azul.png'
import tverde from '../media/verde.png'
import tours from '../data/Tours'
import GuidedTourModal from './GuidedTourModal'

export default function GuidedToursServiceCards() {
  return (
    <div className='container-fluid d-flex flex-column py-5 px-3 px-sm-5 p-lg-0'>
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
        GUIDED TOURS
      </h1>
      <div className='d-flex flex-wrap flex-column flex-xxl-row justify-content-center py-3 px-lg-5'>
        {tours.map((tour, index) => (
          <div
            className='col-xxl-3 d-flex flex-column flex-md-row flex-xxl-column border-lime m-2 justify-content-between py-3 px-3'
            key={index}
          >
            <div className='d-flex justify-content-center'>
              <img
                className='align-self-center fit-img'
                src={`/react/images/${tour.subname}/${tour.images[0]}`}
                alt={tour.images[0]}
                height='190'
              />
            </div>
            <div className='d-flex flex-grow-1 flex-xxl-grow-0 flex-column justify-content-center ps-0 ps-md-5 ps-xxl-0 pt-3 pt-md-0 pt-lg-3'>
              <h2
                className='text-break text-center'
                style={{ color: '#415165' }}
              >
                {tour.title}
              </h2>
              <p
                className='text-break fs-6 text-center '
                style={{ color: '#415165' }}
              >
                {tour.description}
              </p>
              <p
                className='fs-6 text-center fw-bold'
                style={{ color: '#415165' }}
              >
                PRICE per person: US$ {tour.price}.-
              </p>
              <GuidedTourModal tour={tour}/>
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
          height='200'
          width='200'
        />
      </div>
    </div>
  )
}
