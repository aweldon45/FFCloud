import videojs from 'video.js'

export default {
  myPlayer () {
    return videojs('myPlayer')
  }
}

/* import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
} */
