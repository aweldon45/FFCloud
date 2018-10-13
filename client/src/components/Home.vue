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

     <b-carousel-slide caption="Test slide"
                       text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                       img-src="https://picsum.photos/1024/480/?image=52"
     ></b-carousel-slide>
     <b-carousel-slide caption="Test slide2"
                       text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                       v-model="Image1"
     ></b-carousel-slide>
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

<!-- Add "scoped" attribute to limit CSS to this component only
<style scoped>
input[type=text] {
  background-color: white;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 30px;
}
</style> -->
