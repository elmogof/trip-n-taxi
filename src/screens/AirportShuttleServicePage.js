import React, { Component } from 'react'
import API from '../data/Data'
import Navigation from '../components/Navigation'
import AirportShuttleServiceCards from '../components/AirportShuttleServiceCards'
import ScrollToTop from '../components/ScrollToTop'

export default class AirportShuttleServicePage extends Component {
  state = {
    services: [],
    route: '/airport-shuttle',
  }
  async componentDidMount() {
    const services = await API.getServices(1)
    this.setState({ services: services.items })
    // console.log(this.state.services)
  }
  render() {
    return (
      <div className='pt-5 mt-4'>
        <ScrollToTop />
        <Navigation url={this.state.route} />
        <AirportShuttleServiceCards data={this.state.services} />
      </div>
    )
  }
}
