import Api from '@/services/Api'

export default {
  index () {
    return Api().get('allfilms')
  },
  screeningFilm (title) {
    return Api().get('film', {
      params: {
        title: encodeURIComponent(title)
      }
    })
  }
}
