<template>
  <div>
  <div :style='screenBackground'>
    <br>
    <video-js id="vidPlayer" class="video-js vjs-default-skin" controls preload="auto" height="575px" data-setup='{}'>
      <source :src="screeningURL" type="application/x-mpegURL">
    </video-js>
  </div>
  <br>
  <div id='check' v-for="films in reqFilm.Items">
    <h2>{{films.info.screeningURL}}</h2>
  </div>
  </div>
</template>

<script>
import VideoPlayer from '@/services/VideoPlayer'
import FilmService from '@/services/FilmService'

export default {
  data () {
    return {
      vidPlayer: VideoPlayer.myPlayer,
      reqFilm: {},
      screeningURL: 'https://s3.amazonaws.com/ffc.linear.output/test2/HLS/testfilm1.m3u8'
    }
  },
  /* created () {
    this.title = this.$route.params.title
  }, */
  async mounted () {
    // request screening film from backend
    this.reqFilm = (await FilmService.screeningFilm()).data
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
