<template>
  <div>
    <div :style="BackgroundStyling">
      <div :style="mainBannerStyling">
        <h2 v-text="message"></h2>
      </div>
  </div>
  <br>
  <ul>
   <li :style='cardStyling'>
    <div :style='cardImgStyling'>
      <a href='#'>
      <img :src='filmImage' :style='Imgstyling'>
      </a>
    </div>
    <div :style='cardTxtStyling'>
      <h4 v-html='filmTitle'></h4>
      <h5 v-html='filmDirector'></h5>
      <h5 v-html='filmFestival'></h5>
    </div>
  </li>
  <li :style='cardStyling'>
    <div :style='cardImgStyling'>
      <a href='#'>
      <img src='https://i.imgur.com/VhJTQlU.jpg' :style='Imgstyling'>
      </a>
    </div>
    <div :style='cardTxtStyling'>
      <h4>Jeffrey's film</h4>
      <h5>Jeffrey Film Festival</h5>
      <h5>Oct 27, 2018 10:00PM</h5>
    </div>
  </li>
  <li :style='cardStyling'>
    <div :style='cardImgStyling'>
      <a href='#'>
      <img src='https://i.imgur.com/P4172CV.jpg' :style='Imgstyling'>
      </a>
    </div>
    <div :style='cardTxtStyling'>
      <h4>Tony's film</h4>
      <h5>Aubrey Film Festival</h5>
      <h5>Oct 28, 2018 12:00PM</h5>
    </div>
  </li>
</ul>
</div>
</template>

<script>

const filmList = [{
  Title: "Holly's Film",
  Festival: 'Encore Film Festival',
  Director: 'Holly Weldon',
  Img: 'https://i.imgur.com/SxhtThr.jpg'
},
{
  Title: "Jeffrey's Film",
  Festival: 'Jeffrey Film Festival',
  Director: 'Jeffrey Weldon',
  Img: 'https://i.imgur.com/VhJTQlU.jpg'
}
]

const filmReturn = (name, prop) => {
  for (var i = 0; i < filmList.length; i++) {
    if (filmList[i].Title === name) {
      return filmList[i][prop]
    } else {
      return 'invalid entry'
    }
  }
}

export default {
  data () {
    return {
      message: 'Experience your favorite festivals from anywhere!',
      message2: 'Simultaneous broadcast with live screenings',
      Film1: "Holly's Film",
      Film2: "Jeffrey's Film",
      filmTitle: filmReturn("Holly's Film", 'Title'),
      filmImage: filmReturn("Holly's Film", 'Img'),
      filmDirector: filmReturn("Holly's Film", 'Director'),
      filmFestival: filmReturn("Holly's Film", 'Festival')
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
