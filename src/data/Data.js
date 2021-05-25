class API {
  async getServicesTypes() {
    const res = await fetch(
      'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/servicestype/'
    )
    const data = await res.json()
    return data
  }

  async getServices(id) {
    const res = await fetch(
      'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/services/' +
        id
    )
    const data = await res.json()
    return data
  }

  async getFavourite() {
    const res = await fetch(
      'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/favourites/1'
    )
    const data = await res.json()
    return data
  }
  async getComments() {
    const res = await fetch(
      'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/comments/'
    )
    const data = await res.json()
    return data
  }

  async getImagesById(id) {
    const res = await fetch(
      'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/servicesimagebystid/' +
        id
    )
    const data = await res.json()
    return data
  }

  async getImages() {
    const res = await fetch(
      'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/servicesimages/'
    )
    const data = await res.json()
    return data
  }

  getActivities() {
    const res = [
      {
        id: 1,
        title: 'SHOPPING',
        description:
          'Whether you need your provision of groceries or choose for a pleasant shopping evening, count on us to manage the hassle of driving, parking and loading',
        img_url:
          'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/miscellaneousimage/6',
        alt_attribute: 'shopping image',
      },
      {
        id: 2,
        title: 'SURFING',
        description:
          'We are always there to move you, your pals and boards to the best surfing spots in the area.',
        img_url:
          'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/miscellaneousimage/6',
        alt_attribute: 'surfing image',
      },
      {
        id: 3,
        title: 'DINING',
        description:
          'Pleasure and safety come along. Dine and wine with the  peace of mind to be driven back home. ',
        img_url:
          'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/miscellaneousimage/6',
        alt_attribute: 'dinning image',
      },
    ]
    return res
  }

  getWhyChooseUs() {
    const res = [
      {
        id: 1,
        title: 'RELIABILITY',
        description:
          'Cleanliness; fully inspected and totally equipped vehicles; wifi on board; experienced drivers, English speaking. We catter the trip and transportation to accomodate your needs and requests.',
        img_url:
          'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/miscellaneousimage/6',
        alt_attribute: 'reliability image',
      },
      {
        id: 2,
        title: '24/7',
        description:
          'Any time you need a transportation. We work around the clock and are always on time.',
        img_url:
          'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/miscellaneousimage/6',
        alt_attribute: '24/7 image',
      },
      {
        id: 3,
        title: 'BEST EXPERIENCE',
        description:
          'With us you will not be an spectator, you will live the experience to its fullest. Take back home the whole flavor of Costa Rica thru an unforgettable trip. Pura Vida!',
        img_url:
          'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/miscellaneousimage/6',
        alt_attribute: 'best experience image',
      },
    ]
    return res
  }
}
export default new API()
