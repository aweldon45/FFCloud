<template>
  <div>
  <div :style='screenBackground'>
    <br>
    <div data-vjs-player>
      <video id="vidPlayer" class="video-js" controls preload="auto" height="575px" data-setup='{}'>
      <source :src="this.reqFilm.Items[0].info.screeningUrl" type="application/x-mpegURL">
    </video>
  </div>
    <br>
    <input id="commentBar" type="text" placeholder="Feedback for the filmmmaker?">
  </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import videojs from 'video.js'
import FilmService from '@/services/FilmService'

export default {
  data () {
    return {
      vidPlayer: null,
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
    // mount player on next tick to prevent hard refresh FU
    this.$nextTick (function () {
      return videojs('vidPlayer')
    })
  },
  computed: {
    screenBackground: function () {
      return {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: '100%'
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
#commentBar {
  padding-top: 10px;
  margin-top: 20px;
  font-size: 16px;
  width: 1025px;
  height: 18px;
  color: white;
  text-indent: 10px;
  line-height: 1.6;
  background-color: #17202A
}
</style>
