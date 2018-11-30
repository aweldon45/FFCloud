import Api from '@/services/Api'

export default {
  index () {
    return Api().get('allfilms')
  },
  screeningFilm () {
    return Api().get('film', {
      params: {
        title: encodeURIComponent("Motown: Sound of the 60's")
      }
    })
  }
}
