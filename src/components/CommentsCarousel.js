import React, { useEffect, useState } from 'react'
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

export default function CommentsCarousel({ data }) {
  var centerSlidePercentage = 33.5
  var widthPercentage = '85%'

  const size = useWindowSize()
  if (size.width < 1200) {
    centerSlidePercentage = 100
    widthPercentage = '90%'
  }
  return (
    <div className='carousel-background d-flex flex-column justify-content-center py-5'>
      <h1
        className='px-5 pb-5 fw-bold text-center'
        style={{ color: '#415165' }}
      >
        REVIEWS
      </h1>
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
        {data.map((comment) => {
          return (
            <div className='px-3 px-sm-5 px-xl-3' key={comment.id}>
              <h3
                className='text-break p-1 text-center'
                style={{ color: '#415165' }}
              >
                {comment.name}
              </h3>
              <p
                className='text-justify text-break'
                style={{ color: '#415165' }}
              >
                {comment.user_comment}
              </p>
            </div>
          )
        })}
      </Carousel>
      <div className='d-flex flex-column pt-4 px-3 align-items-end justify-content-end'>
        <h1 className='fw-bold' style={{ color: '#415165' }}>
          How was your experience?
        </h1>
        <a
          className='btn btn-lg fw-bold float-right'
          style={{ backgroundColor: '#d9d9d9', color: '#415165' }}
          href='https://www.tripadvisor.es/UserReviewEdit-g309253-d12236155-Trip_N_Taxi-Tamarindo_Province_of_Guanacaste.html'
          role='button'
          target='_blank'
          rel='noopener noreferrer'
        >
          LEAVE A REVIEW
        </a>
      </div>
    </div>
  )
}
