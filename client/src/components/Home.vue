<template>
  <div class="homepage">
    <div>
       <h2 class="logline">{{message}}</h2>
       <p class="logline">{{message2}}</p>
       <button class="button">See What's Playing!</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Experience your favorite festivals from anywhere!',
      message2: 'Simultaneous broadcast with live screenings'
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
},
.button {
  color: black;
}
</style>
