<template>
  <div>
  <div :style='myPlayer1'>
    <br>
    <video class="vidPlayer" width="80%" controls preload="auto">
      <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
      <!--<source src="https://s3.amazonaws.com/ffc.linear.output/test2/HLS/testfilm1.m3u8" type="application/x-mpegURL">-->
    </video>
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
    myPlayer1: function () {
      return {
        position: 'fixed',
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
