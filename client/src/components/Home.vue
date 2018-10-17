<template>
  <div class="homepage">
    <div>
       <h2 class="logline">{{message}}</h2>
       <p class="logline">{{message2}}</p>
       <button href="#" :style="btnstyling">See What's Playing!</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Experience your favorite festivals from anywhere!',
      message2: 'Simultaneous broadcast with live screenings',
      backgroundColor: '#008CBA',
      color: 'white',
      padding: '15px 20px',
      textDecoration: 'none',
      fontSize: '16px',
      border: '2px solid #008CBA',
      borderRadius: '12px',
      fontWeight: 'bold'
    }
  },
  computed: {
    btnstyling: function () {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color,
        padding: this.padding,
        fontSize: this.fontSize,
        border: this.border,
        transitionDuration: this.transitionDuration,
        borderRadius: this.borderRadius,
        fontWeight: this.fontWeight
      }
    }
  }
}
</script>

<style scoped>
.homepage {
  background-image: url("https://i.imgur.com/Ssvxw5P.jpg");
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position:static;
},
.logline {
color: white;
text-align: center;
position: relative;
top: 45%;
}
</style>
