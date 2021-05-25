import React, { Component } from 'react'
import API from '../data/Data'
import Navigation from '../components/Navigation'
import GuidedToursServiceCards from '../components/GuidedToursServiceCards'
import ScrollToTop from '../components/ScrollToTop'

export default class GuidedToursServicePage extends Component {
  state = {
    services: [],
    images: [],
    route: '/tours',
  }
  async componentDidMount() {
    const services = await API.getServices(2)
    this.setState({ services: services.items })
    // console.log(this.state.services)

    const images = await API.getImages()
    this.setState({ images: images.items })
    // console.log(this.state.images)
  }
  render() {
    return (
      <>
        <div className='pt-5 mt-4'>
          <ScrollToTop />
          <Navigation url={this.state.route} />
          <GuidedToursServiceCards
            data={this.state.services}
            images={this.state.images}
          />
        </div>
      </>
    )
  }
}
