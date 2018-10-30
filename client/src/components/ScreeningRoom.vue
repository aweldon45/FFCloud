<template>
  <div>
  <div :style='myPlayer'>
    <br>
    <video class="vjs-16-9" width="80%" controls preload="auto">
      <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
      <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
    </video>
  </div>
  <!--<div>
    <form>
      <label>Director Feedback:</label>
      <input :style='inputStyling'>
    </form>
  </div>-->
  </div>
</template>

<script>
window.videojs = require('video.js')

export default {
  computed: {
    myPlayer: function () {
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
