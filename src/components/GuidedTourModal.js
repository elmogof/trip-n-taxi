import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Carousel } from 'react-responsive-carousel'

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

function GuidedTourModal(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  var centerSlidePercentage = 33.5
  var widthPercentage = '85%'
  var price = props.item.price

  const size = useWindowSize()
  if (size.width < 1200) {
    centerSlidePercentage = 100
    widthPercentage = '75%'
  }

  if (props.item.discount) {
    price = props.item.price * (1 - props.item.discount / 100)
  }

  return (
    <>
      <Button
        className='btn mx-auto fw-bold'
        onClick={handleShow}
        style={{
          backgroundColor: '#9ed0c9',
          color: '#415165',
          border: 'none',
        }}
      >
        MORE INFO
      </Button>

      <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header className='d-flex justify-content-center'>
          <Modal.Title
            className='fw-bold text-center'
            style={{ color: '#415165' }}
          >
            {props.item.title}
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
            {props.images.map((i) => {
              return (
                <div className='align-self-center' key={i.id}>
                  <img className='p-1' src={i.image} alt={i.alt_attribute} />
                </div>
              )
            })}
          </Carousel>
          <div className='pt-3 px-3'>
            <p className='fs-6 text-center ' style={{ color: '#415165' }}>
              {props.item.long_description}
            </p>
            <p
              className='fs-6 text-center fw-bold'
              style={{ color: '#415165' }}
            >
              PRICE per person: {props.item.currency} {price}.-
            </p>
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
