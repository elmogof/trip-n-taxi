import React, { Component } from 'react'
import Activities from '../components/Activities'
import TaxiServiceCards from '../components/TaxiServiceCards'
import Navigation from '../components/Navigation'
import API from '../data/Data'
import ScrollToTop from '../components/ScrollToTop'

export default class TaxiService extends Component {
  state = {
    activitiesData: [
      {
        id: 1,
        title: 'SHOPPING',
        description:
          'Whether you need your provision of groceries or choose for a pleasant shopping evening, count on us to manage the hassle of driving, parking and loading',
        img_url:
          'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/miscellaneousimage/6',
      },
      {
        id: 2,
        title: 'SURFING',
        description:
          'We are always there to move you, your pals and boards to the best surfing spots in the area.',
        img_url:
          'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/miscellaneousimage/6',
      },
      {
        id: 3,
        title: 'DINING',
        description:
          'Pleasure and safety come along. Dine and wine with the  peace of mind to be driven back home. ',
        img_url:
          'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/miscellaneousimage/6',
      },
    ],
    services: [],
    route: '/taxi-service',
  }

  async componentDidMount() {
    const s = await API.getServices(3)
    const services = s.items
    this.setState({ services })
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
