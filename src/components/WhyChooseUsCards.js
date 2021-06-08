import React from 'react'
import tazul from '../media/azul.png'
import tverde from '../media/verde.png'
import ContactButtons from './ContactButtons'

function WhyChooseUsCards(props) {
  return (
    <>
      <div className='container-fluid d-flex flex-column p-lg-0 p-5'>
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
          WHY US?
        </h1>
        <div className='d-flex flex-column flex-xl-row py-3 px-lg-5 my-1'>
          {props.data.map((st) => (
            <div
              className='col-lg d-flex flex-column flex-md-row flex-xl-column py-3 px-3'
              key={st.id}
            >
              <div className='d-flex justify-content-center'>
                <img
                  className='align-self-center fit-img'
                  src={st.img_url}
                  alt={st.alt_attribute}
                  height='200'
                />
              </div>
              <div className='d-flex flex-column justify-content-center ps-0 ps-md-3 ps-xl-0 pt-3 pt-md-0 pt-lg-3'>
                <h4 className='text-center' style={{ color: '#415165' }}>
                  {st.title}
                </h4>
                <p className='fs-6t text-center' style={{ color: '#415165' }}>
                  {st.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <ContactButtons
          btnSize='btn-lg'
          btnText='Contact Us'
          url='https://wa.me/50686311727?text=Hi!%20We%20would%20like%20some%20information%20about%20transportation'
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
    </>
  )
}

export default WhyChooseUsCards
