import React, { Component } from 'react'
import Activities from '../components/Activities'
import TaxiServiceCards from '../components/TaxiServiceCards'
import Navigation from '../components/Navigation'
import API from '../data/Data'
import ScrollToTop from '../components/ScrollToTop'

export default class TaxiService extends Component {
  state = {
    activitiesData: [],
    services: [],
    route: '/taxi-service',
  }

  async componentDidMount() {
    const services = await API.getServices(3)
    this.setState({ services: services.items })

    const activities = await API.getActivities()
    this.setState({ activitiesData: activities })
  }
  render() {
    return (
      <div className='pt-5 mt-4'>
        <ScrollToTop />
        <Navigation url={this.state.route} />
        <Activities data={this.state.activitiesData} />
        <TaxiServiceCards data={this.state.services} />
      </div>
    )
  }
}
