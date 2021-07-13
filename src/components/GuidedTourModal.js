import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Carousel } from 'react-responsive-carousel'
import ContactButtons from './ContactButtons'

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

function GuidedTourModal({ item, images, btnSize }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  var centerSlidePercentage = 33.5
  var widthPercentage = '85%'

  const size = useWindowSize()
  if (size.width < 1200) {
    centerSlidePercentage = 100
    widthPercentage = '75%'
  }

  return (
    <>
      <Button
        className={`btn ${btnSize} mx-auto fw-bold`}
        onClick={handleShow}
        style={{
          backgroundColor: '#9ed0c9',
          color: '#415165',
          border: 'none',
        }}
      >
        MORE INFO
      </Button>

      <Modal show={show} onHide={handleClose} size='xl' centered>
        <Modal.Header className='d-flex justify-content-center'>
          <Modal.Title
            className='fw-bold text-center'
            style={{ color: '#415165' }}
          >
            {item.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column justify-content-center'>
          <Carousel
            className='d-flex justify-content-center'
            autoPlay
            centerMode
            infiniteLoop
            showStatus={false}
            stopOnHover
            centerSlidePercentage={centerSlidePercentage}
            showThumbs={false}
            width={widthPercentage}
            showIndicators={false}
          >
            {images.map((image) => {
              return (
                <div className='align-self-center' key={image.id}>
                  <img
                    className='p-1 fit-img-modal'
                    src={image.image}
                    alt={image.alt_attribute}
                  />
                </div>
              )
            })}
          </Carousel>
          <div className='pt-3 px-3'>
            <p
              className='text-break fs-6 text-center'
              style={{ color: '#415165' }}
            >
              {item.long_description}
            </p>
            <p
              className='fs-6 text-center fw-bold'
              style={{ color: '#415165' }}
            >
              PRICE per person: US$ {item.discount ? item.discount : item.price}
              .-
            </p>
            <ContactButtons
              btnText='Make a reservation'
              url='https://wa.me/50686311727?text=Hi!%20We%20would%20like%20to%20reserve%20a%20tour'
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className='fw-bold'
            style={{
              backgroundColor: '#9ed0c9',
              color: '#415165',
              border: 'none',
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default GuidedTourModal
