<template>
  <div>
    <b-container class="container" id="centerWelcome">
      <h1 align-self="center">Enjoy your favorite festivals anywhere!</h1>
      <input align-self="center" type="text" placeholder="Search.." size="25">
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type=text] {
  background-color: white;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 30px;
}
</style>
