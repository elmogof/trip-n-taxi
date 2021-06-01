import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactButtons({ btnSize, btnText }) {
  return (
    <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center'>
      <a
        className={`btn ${btnSize} fw-bold mb-2 mb-lg-0 me-lg-1`}
        href='https://wa.me/50686311727'
        style={{ backgroundColor: '#9ed0c9', color: '#415165' }}
        role='button'
      >
        <FontAwesomeIcon
          icon={['fab', 'whatsapp']}
          fixedWidth
          transform='grow-6'
          color='#415165'
        />{' '}
        {`${btnText}`}
      </a>
      <a
        className={`btn ${btnSize} fw-bold text-capitalize px-4 ms-lg-1`}
        href='tel:(+506) 84377472'
        style={{ backgroundColor: '#415165', color: '#9ed0c9' }}
        role='button'
      >
        <FontAwesomeIcon icon={['fas', 'phone']} fixedWidth color='#9ed0c9' />{' '}
        call us
      </a>
    </div>
  )
}
