import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import GuidedToursServiceCards from '../components/GuidedToursServiceCards'
import ScrollToTop from '../components/ScrollToTop'

export default class GuidedToursServicePage extends Component {
  state = {
    route: '/tours',
  }
  render() {
    return (
      <>
        <div className='pt-5 mt-4'>
          <ScrollToTop />
          <Navigation url={this.state.route} />
          <GuidedToursServiceCards/>
        </div>
      </>
    )
  }
}
