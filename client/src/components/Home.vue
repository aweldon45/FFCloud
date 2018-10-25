 <template>
  <div>
    <div :style="BackgroundStyling">
      <div :style="mainBannerStyling">
        <h2>{{message}}</h2>
      </div>
  </div>
  <br>
  <ul>
  <li :style='cardStyling'>
    <div :style='cardImgStyling'>
      Image
    </div>
    <div :style='cardTxtStyling'>
      <h4>Holly's film</h4>
    </div>
  </li>
  <li :style='cardStyling'>
    <div :style='cardImgStyling'>
      Image
    </div>
    <div :style='cardTxtStyling'>
      <h4>Jeffrey's film</h4>
    </div>
  </li>
  <li :style='cardStyling'>
    <div :style='cardImgStyling'>
      Image
    </div>
    <div :style='cardTxtStyling'>
      <h4>Tony's film</h4>
    </div>
  </li>
</ul>
</div>
</template>

<script>

/* const filmList = {
  Img: '',
  Title: 'Hollys Film',
  Festival: 'Encore Film Festival',
  Director: 'Holly Weldon'
} */

export default {
  data () {
    return {
      message: 'Experience your favorite festivals from anywhere!',
      message2: 'Simultaneous broadcast with live screenings'
    }
  },
  computed: {
    BackgroundStyling: function () {
      return {
        display: 'block',
        backgroundColor: '#F5CBA7',
        height: '210px',
        justifyContent: 'center',
        lineHeight: '15.6px',
        paddingLeft: '20px',
        paddingRight: '20px',
        top: '60px',
        width: '100%'
      }
    },
    mainBannerStyling: function () {
      return {
        display: 'block',
        fontSize: '30px',
        position: 'absolute',
        height: '210px',
        width: '100%',
        color: '#263238',
        textAlign: 'center',
        lineHeight: '1.5',
        margin: '0 auto'
      }
    },
    cardStyling: function () {
      return {
        position: 'relative',
        boxSizing: 'border-box',
        margin: '20px 20px',
        width: '225px',
        height: '350px',
        borderRadius: '5px',
        display: 'inline-block',
        border: '1px solid black'
      }
    },
    cardImgStyling: function () {
      return {
        position: 'absolute',
        boxSizing: 'border-box',
        width: '100%',
        height: '200px',
        top: '0',
        backgroundColor: '#F39C12'
      }
    },
    cardTxtStyling: function () {
      return {
        position: 'absolute',
        boxSizing: 'border-box',
        width: '100%',
        height: '150px',
        bottom: '0',
        backgroundColor: 'white'
      }
    }
  }
}
</script>
