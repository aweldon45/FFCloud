 <template>
  <div>
    <div class="homepage">
       <h2 class="logline">{{message}}</h2>
       <p class="logline">{{message2}}</p>
  </div>
  <br>
  <ul>
  <li :style='cardStyling'>
    <h2>film A</h2>
  </li>
  <li :style='cardStyling'>
    <h2>film B</h2>
  </li>
  <li :style='cardStyling'>
    <h2>film C</h2>
  </li>
</ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Experience your favorite festivals from anywhere!',
      message2: 'Simultaneous broadcast with live screenings'
    }
  },
  computed: {
    cardStyling: function () {
      return {
        position: 'relative',
        margin: '20px 20px',
        boxShadow: '0 4px 8px 0 rgba',
        transition: '0.3s',
        width: '450px',
        height: '300px',
        borderRadius: '5px',
        backgroundColor: '#008CBA',
        display: 'inline-block'
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
  position:relative;
  margin-left: 10px
},
.logline {
color: white;
text-align: center;
position: relative;
top: 45%;
}

</style>
