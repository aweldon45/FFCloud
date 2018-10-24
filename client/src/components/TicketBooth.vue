<template>
    <div :style='cardStyling'>
      festival A
    </div>
</template>

<script>

/* const festivals = ['a', 'b', 'c', 'd']

const festivalData = {
  title: 'title',
  festival: 'festival',
  image: 'image',
  director: 'director',
  screeningDate: 'screeningDate',
  screeningTime: 'screeningTime',
  ticketPrice: 'ticketPrice',
  logLine: 'logLine'
} */

export default {
  computed: {
    cardStyling: function () {
      return {
        boxShadow: '0 4px 8px 0 rgba',
        transition: '0.3s',
        width: '40%',
        height: '400px',
        borderRadius: '5px',
        backgroundColor: '#008CBA'
      }
    }
  }
}
</script>
