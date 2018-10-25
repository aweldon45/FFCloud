 <template>
  <div>
    <div :style="mainBannerStyling">
       <h2>{{message}}</h2>
       <p>{{message2}}</p>
  </div>
  <div>
    <ul :style='midNavStyling'>
      <li :style='midNavtxtStyling'>
        <a href="#">Screening Soon</a>
      </li>
      <li :style='midNavtxtStyling'>
        <a href="#">Screenings by Festival</a>
      </li>
      <li :style='midNavtxtStyling'>
        <a href="#">Top Performers</a>
      </li>
    </ul>
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
        width: '202px',
        height: '158px',
        borderRadius: '5px',
        backgroundColor: '#008CBA',
        display: 'inline-block'
      }
    },
    mainBannerStyling: function () {
      return {
        display: 'grid',
        backgroundColor: '#F5CBA7',
        height: '200px',
        width: '100%',
        color: 'black',
        textAlign: 'center',
        margin: '0 auto',
        boxSizing: 'border-box'
      }
    },
    midNavStyling: function () {
      return {
        width: '100%',
        height: '60px',
        transition: '0.3s',
        color: 'black',
        textAlign: 'center',
        marginTop: '10 px',
        marginBottom: '10 px',
        boxSizing: 'border-box'
      }
    },
    midNavtxtStyling: function () {
      return {
        display: 'inline',
        fontSize: '25px',
        marginRight: '20px',
        marginLeft: '20px',
        textDecorationLine: 'none',
        textAlign: 'center'
      }
    }
  }
}
</script>
