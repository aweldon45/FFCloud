<template>
  <div>
    <div :style="BackgroundStyling">
      <div :style="mainBannerStyling">
        <h2>{{message}}</h2>
      </div>
  </div>
  <br>
  <div :style='festivalHeaderStyling'>
    <h2>Encore Film Festival</h2>
  </div>
  <ul>
   <li :style='cardStyling' v-for="films in filmList.Items" :key="films.title">
     <div :style='cardImgStyling'>
       <a href='/screeningroom'>
       <img :src="films.info.posterUrl" :style='Imgstyling'>
       </a>
     </div>
    <div :style='cardTxtStyling'>
      <h4>{{films.title}}</h4>
      <h5>{{films.info.directors}}</h5>
      <h5>{{films.info.screeningDate}}</h5>
      <h5>{{films.info.screeningTime}}</h5>
    </div>
  </li>
</ul>
</div>
</template>

<script>
import FilmService from '@/services/FilmService'
export default {
  data () {
    return {
      message: 'Experience your favorite festivals from anywhere!',
      message2: 'Simultaneous broadcast with live screenings',
      filmList: {}
    }
  },
  async mounted () {
    // request films from backend
    this.filmList = (await FilmService.index()).data
    console.log('filmList', this.filmList)
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
    festivalHeaderStyling: function () {
      return {
        display: 'inline',
        fontSize: '18px',
        width: '100%',
        color: '#263238',
        textAlign: 'left'
      }
    },
    cardStyling: function () {
      return {
        position: 'relative',
        boxSizing: 'border-box',
        margin: '20px 20px',
        width: '225px',
        height: '380px',
        borderRadius: '5px',
        display: 'inline-block'
      }
    },
    cardImgStyling: function () {
      return {
        position: 'absolute',
        boxSizing: 'border-box',
        width: '100%',
        height: '200px',
        top: '0',
        boxShadow: '0 4px 8px 0 #D5DBDB'
      }
    },
    cardTxtStyling: function () {
      return {
        position: 'absolute',
        boxSizing: 'border-box',
        width: '100%',
        height: '180px',
        bottom: '0',
        backgroundColor: 'white',
        border: '1px solid #D5DBDB',
        boxShadow: '0 4px 8px 0 #D5DBDB'
      }
    },
    Imgstyling: function () {
      return {
        width: '100%',
        height: '100%'
      }
    }
  }
}
</script>
