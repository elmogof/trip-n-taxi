import AirportShuttleService from './AirportShuttleServicePage'
import GuidedTourService from './GuidedToursServicePage'
import TaxiService from './TaxiServicePage'
import Footer from '../components/Footer'
import MainPage from './MainPage'
import NotFound from './NotFound'
import AboutUs from './AboutUs'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const PageRouter = () => {
  return (
    <Router basename='/react'>
      <Switch>
        <Route path='/airport-shuttle'>
          <AirportShuttleService />
        </Route>
        <Route path='/taxi-service'>
          <TaxiService />
        </Route>
        <Route path='/tours'>
          <GuidedTourService />
        </Route>
        <Route path='/about-us'>
          <AboutUs />
        </Route>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default PageRouter
