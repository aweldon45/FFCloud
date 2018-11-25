<template>
  <div>
  <div :style='screenBackground'>
    <br>
    <video-js id="vidPlayer" class="video-js vjs-default-skin" controls preload="auto" height="575px" data-setup='{}'>
      <source src="https://s3.amazonaws.com/ffc.linear.output/test2/HLS/testfilm1.m3u8" type="application/x-mpegURL">
    </video-js>
  </div>
  </div>
</template>

<script>
import VideoPlayer from '@/services/VideoPlayer'

export default {
  data () {
    return {
      vidPlayer: VideoPlayer.myPlayer
    }
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
