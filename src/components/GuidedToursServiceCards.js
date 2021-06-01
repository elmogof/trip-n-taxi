import React from 'react'
import tazul from '../media/azul.png'
import tverde from '../media/verde.png'
import GuidedTourModal from './GuidedTourModal'

function imagesList(id, images) {
  const list = images.filter((i) => i.service_table_id === id)
  // console.log(list)
  return list
}

export default function GuidedToursServiceCards({ data, images }) {
  console.log(data)
  console.log(data)
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
      <div className='d-flex flex-wrap flex-column flex-xl-row around justify-content-center py-3 px-lg-5'>
        {data.map((guidedTour) => (
          <div
            className='col-xxl-3 d-flex flex-column border-lime m-2 justify-content-between flex-md-row flex-xxl-column py-3 px-3'
            key={guidedTour.id}
          >
            <div className='d-flex justify-content-center'>
              <img
                className='align-self-center'
                src={guidedTour.img_url}
                alt='...'
                height='190'
              />
            </div>
            <div className='d-flex flex-column justify-content-center ps-0 ps-md-5 ps-xxl-0 pt-3 pt-md-0 pt-lg-3'>
              <h2 className='text-center' style={{ color: '#415165' }}>
                {guidedTour.title}
              </h2>
              <p className='fs-6 text-center ' style={{ color: '#415165' }}>
                {guidedTour.description}
              </p>
              <p
                className='fs-6 text-center fw-bold'
                style={{ color: '#415165' }}
              >
                PRICE per person: {guidedTour.currency}{' '}
                {guidedTour.discount ? guidedTour.discount : guidedTour.price}.-
              </p>
              <GuidedTourModal
                item={guidedTour}
                images={imagesList(guidedTour.id, images)}
              />
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
