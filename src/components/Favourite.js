import React, { useEffect, useState } from 'react'
import tverde from '../media/verde.png'
import { Carousel } from 'react-responsive-carousel'
import GuidedTourModal from './GuidedTourModal'

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

export default function Favourite(props) {
  var centerSlidePercentage = 33.5
  var widthPercentage = '85%'

  const size = useWindowSize()
  if (size.width < 768) {
    centerSlidePercentage = 100
    widthPercentage = '90%'
  }

  if (props.data) {
    return (
      <>
        <div
          className='container-fluid d-flex flex-column px-0 pt-5 pt-lg-0'
          style={{ background: '#415165' }}
        >
          <div className='d-none d-lg-inline' style={{ marginBottom: '-7rem' }}>
            <img
              className='float-start decoration'
              src={tverde}
              alt=''
              height='200'
              width='200'
            />
          </div>
          <h1 className='fw-bold text-center text-white'>PICK OF THE WEEK</h1>
          <div className='d-flex flex-column flex-xl-row justify-content-center py-3 px-lg-5'>
            {props.data.map((f) => (
              <div
                className='col-lg d-flex flex-column justify-content-between py-3 text-center px-3'
                key={f.id}
              >
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
                        <img
                          className='p-1'
                          src={i.image}
                          alt={i.alt_attribute}
                        />
                      </div>
                    )
                  })}
                </Carousel>
                <div className='d-flex flex-column align-items-center justify-content-between pt-3 mx-md-5 px-3 px-sm-5'>
                  <div>
                    <h4 className='text-center text-white'>{f.title}</h4>
                  </div>
                  <div>
                    <p className='fs-6 text-center text-white px-lg-5'>
                      {f.description}
                    </p>
                  </div>
                  <div className='d-flex pb-3'>
                    <h2 className='text-center text-white fw-bold line-text pe-3'>
                      {f.currency} {f.price}
                    </h2>
                    <h2 className='text-center text-white fw-bold'>
                      {f.currency} {f.price * (1 - f.discount / 100)}
                    </h2>
                  </div>
                  <div>
                    {props.data.map((f) => (
                      <GuidedTourModal
                        key={f.id}
                        item={f}
                        images={props.images}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  } else {
    return <></>
  }
}
