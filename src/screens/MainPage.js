import React, { Component } from 'react'
import ServicesTypesCards from '../components/ServicesTypesCards'
import WhyChooseUsCards from '../components/WhyChooseUsCards'
import Favourite from '../components/Favourite'
import Hero from '../components/Hero'
import CommentsCarousel from '../components/CommentsCarousel'
import API from '../data/Data'
import { getServicesTypes } from '../data/DataApi'
import Navigation from '../components/Navigation'

export default class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      servicesTypes: [],
      chooseUsData: [],
      favourite: [],
      servicesImages: [],
      comments: [],
      route: '',
    }
  }

  async componentDidMount() {

    const servicesTypesData = await getServicesTypes()
    this.setState({ servicesTypes: servicesTypesData })
    // console.log(this.state.servicesTypes)

    const chooseUsData = await API.getWhyChooseUs()
    this.setState({ chooseUsData: chooseUsData.items })
    // console.log(this.state.chooseUsData)

    const favourite = await API.getFavourite()
    this.setState({ favourite: favourite.items })
    // console.log(this.state.favourite)

    const comments = await API.getComments()
    this.setState({ comments: comments.items })
    // console.log(this.state.comments)

    if (this.state.favourite.length > 0) {
      const servicesImages = await API.getImagesById(
        this.state.favourite[0].service_table_id
      )
      this.setState({ servicesImages: servicesImages.items })
      // console.log(this.state.servicesImages)
    }
  }

  render() {
    return (
      <>
        <Navigation url={this.state.route} />
        <Hero />
        <ServicesTypesCards data={this.state.servicesTypes} />
        <WhyChooseUsCards data={this.state.chooseUsData} />
        <Favourite
          data={this.state.favourite}
          images={this.state.servicesImages}
        />
        <CommentsCarousel data={this.state.comments} />
      </>
    )
  }
}
