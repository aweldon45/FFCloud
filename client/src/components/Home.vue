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
       <img :src="films.Img" :style='Imgstyling'>
       </a>
     </div>
    <div :style='cardTxtStyling'>
      <h4>{{films.title}}</h4>
      <h5>{{films.Director}}</h5>
      <h5>{{films.SDate}}</h5>
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
   /* return {
      message: 'Experience your favorite festivals from anywhere!',
      message2: 'Simultaneous broadcast with live screenings',
      filmList: {
        Items: [{
        filmID: 'A1',
        Title: "Holly's Film",
        SDate: 'Oct 28 8:00PM',
        Director: 'Holly Weldon',
        Img: 'https://i.imgur.com/SxhtThr.jpg'
      },
      {
        filmID: 'A2',
        Title: "Jeffrey's Film",
        SDate: 'Oct 28 8:00PM',
        Director: 'Jeffrey Weldon',
        Img: 'https://i.imgur.com/VhJTQlU.jpg'
      },
      {
        filmID: 'A3',
        Title: "Aubrey's Film",
        SDate: 'Oct 31 8:00PM',
        Director: 'Aubrey Chamberlain',
        Img: 'https://i.imgur.com/P4172CV.jpg'
      }
    ],
    count: 5,
    scannedCount: 5
    }
    }
  }, */
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
        top: '0'
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
