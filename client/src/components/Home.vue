<template>
  <div>
    <b-carousel id="carousel1"
                   style="text-shadow: 1px 1px 2px #333;"
                   controls
                   indicators
                   background="#ababab"
                   :interval="4000"
                   img-width="1024"
                   img-height="480"
                   v-model="slide"
                   @sliding-start="onSlideStart"
                   @sliding-end="onSlideEnd"
   >
     <b-carousel-slide img-src="https://i.imgur.com/P4172CV.jpg">
       <b-row>
         <b-col>
           <h1 style="height: 600px" class="carousel-caption">Experience your favorite festivals from anywhere!</h1>
         </b-col>
       </b-row>
     </b-carousel-slide>
     <b-carousel-slide img-src="https://i.imgur.com/SxhtThr.jpg">
       <b-row>
         <b-col>
           <h1 style="height: 600px" class="carousel-caption">Experience your favorite festivals from anywhere!</h1>
         </b-col>
       </b-row>
     </b-carousel-slide>
     <b-carousel-slide img-src="https://i.imgur.com/VhJTQlU.jpg">
       <b-row>
         <b-col>
           <h1 style="height: 600px" class="carousel-caption">Experience your favorite festivals from anywhere!
             <br>
             <button>Watch
             </button>
           </h1>
         </b-col>
       </b-row>
      </b-carousel-slide>
   </b-carousel>
 </div>
</template>

<script>

export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  name: 'Home'
}
</script>

<style scoped>
</style>
