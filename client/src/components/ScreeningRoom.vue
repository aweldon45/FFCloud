<template>
  <div>
  <div :style='screenBackground'>
    <br>
    <video-js id="vidPlayer" class="video-js vjs-default-skin" controls preload="auto" height="575px" data-setup='{}'>
      <source :src="this.reqFilm.Items[0].info.screeningURL" type="application/x-mpegURL">
    </video-js>
  </div>
  </div>
</template>

<script>
import router from '../router'
import VideoPlayer from '@/services/VideoPlayer'
import FilmService from '@/services/FilmService'

export default {
  data () {
    return {
      vidPlayer: VideoPlayer.myPlayer,
      reqFilm: {},
      title1: null
    }
  },
  created () {
    this.title1 = this.$route.params.title
  },
  async mounted () {
    // request screening film from backend "Motown: Sound of the 60's"
    this.reqFilm = (await FilmService.screeningFilm(this.title1)).data
    console.log('reqFilm', this.reqFilm)
  },
  computed: {
    screenBackground: function () {
      return {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: '615px'
      }
    },
    inputStyling: function () {
      return {
        display: 'block',
        width: '400px',
        padding: '12px 20px',
        fontSize: '16px',
        margin: '0 auto'
      }
    }
  }
}
</script>

<style scoped>
#check {
  color: red;
  margin-top: 10px;
  position: relative;
}
</style>
