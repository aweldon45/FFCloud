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
           <h1 style="height: 600px" class="display-4">Experience your favorite festivals from anywhere!
             <br>
             <h3>Simultaneous broadcast with live screenings</h3>
             <button type="button" class="btn btn-primary btn-lg" onclick="/ticketbooth">See what's playing!
             </button>
           </h1>
         </b-col>
       </b-row>
     </b-carousel-slide>
     <b-carousel-slide img-src="https://i.imgur.com/SxhtThr.jpg">
       <b-row>
         <b-col>
           <h1 style="height: 600px" class="display-4">Discover new up and coming filmmakers!
             <br>
             <h3>Connect with filmmakers whose films you love</h3>
             <button type="button" class="btn btn-primary btn-lg" href="/ticketbooth">See what's playing!
             </button>
           </h1>
         </b-col>
       </b-row>
     </b-carousel-slide>
     <b-carousel-slide img-src="https://i.imgur.com/VhJTQlU.jpg">
       <b-row>
         <b-col>
           <h1 style="height: 600px" class="display-4">Engage with other audience members real-time!
             <br>
             <h3>Use chat functionality to provide feedback about the screening</h3>
             <button type="button" class="btn btn-primary btn-lg" href="/ticketbooth">See what's playing!
             </button>
           </h1>
         </b-col>
       </b-row>
      </b-carousel-slide>
   </b-carousel>
   <hr>
   <h1>Festival Partners</h1>
   <br>
   <b-row>
     <b-col>
       <b-card title="Festival 1"
          img-src="https://i.imgur.com/4M2XKTu.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
  </b-card>
     </b-col>
     <b-col>
       <b-card title="Festival 2"
          img-src="https://i.imgur.com/4M2XKTu.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
  </b-card>
     </b-col>
     <b-col>
       <b-card title="Festival 3"
          img-src="https://i.imgur.com/4M2XKTu.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
  </b-card>
     </b-col>
   </b-row>
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
