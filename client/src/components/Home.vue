<template>
  <div>
    <div :style="BackgroundStyling">
      <div :style="mainBannerStyling">
        <h2>{{message}}</h2>
      </div>
  </div>
  <br>
  <div :style='festivalHeaderStyling' v-for="festivals in festivalCount" :key="festivals">
    <h2>{{festivals}}</h2>
  <ul id='scrollingwrapper'>
   <li :style='cardStyling' v-if="films.festival === festivals" v-for="films in filmList.Items" :key="films.title">
     <div :style='cardImgStyling'>
       <router-link :to="{name: 'screeningroom', params: {title: films.title} }">
       <img :src="films.info.posterUrl" :style='Imgstyling'>
     </router-link>
     </div>
    <div :style='cardTxtStyling'>
      <p id='filmtitle'>{{films.title}}</p>
      <p id='filmscreen'>{{films.info.screeningDate}} | {{films.info.screeningTime}}</p>
      <p>Director: {{films.info.directors}}</p>
      <p id='filmlogline'>{{films.info.logline}}</p>
    </div>
  </li>
</ul>
</div>
</div>
</template>

<script>
import FilmService from '@/services/FilmService'
export default {
  data () {
    return {
      message: 'Experience your favorite festivals from anywhere!',
      message2: 'Simultaneous broadcast with live screenings',
      filmList: {},
      festivalCount: null
    }
  },
  async mounted () {
    // request films from backend
    this.filmList = (await FilmService.index()).data
    console.log('filmList', this.filmList)
    // create festival headers
    let i = 0
    let festCheck = []
    for (i = 0; i < await this.filmList.Items.length; i++) {
      festCheck.push(this.filmList.Items[i].festival)
    }
    let festCheckResponse = festCheck.filter(function (item, pos) {
      return festCheck.indexOf(item) === pos
    })
    this.festivalCount = festCheckResponse
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
        width: '300px',
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
        top: '0px',
        border: '1px solid #D5DBDB',
        borderRadius: '5%',
        boxShadow: '8px 0 8px 0 #D5DBDB'
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
        borderRadius: '10%'
      }
    },
    Imgstyling: function () {
      return {
        width: '100%',
        height: '100%',
        borderRadius: '5%'
      }
    }
  }
}
</script>

<style scoped>
#filmtitle {
  font-weight: bold;
  color: #7E5109;
  text-transform: uppercase;
}
#filmscreen {
  font-weight: bold;
  text-transform: uppercase;
}
#filmlogline {
  overflow-wrap: break-word;
  white-space: normal;
}
#scrollingwrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
::-webkit-scrollbar {
   display: none;
}
</style>
