<template>
  <nav>
    <ul>
      <li>
        <a href="/">FilmFestivalCloud</a>
      </li>
      <li style="float: right">
        <a href="#">How it Works</a>
      </li>
      <li style="float: right">
        <a href="/TicketBooth">Sign Up</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    listStyling: function () {
      return {
        backgroundColor: '#333',
        position: 'fixed',
        top: '0',
        width: '100%'
      }
    }
  }
}
</script>

<style scoped>
ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #F5CBA7;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 1;
}
li {
    float: left;
    list-style-type: none;
}
li a {
    display: block;
    font-weight: 600;
    font-family: Helvetica, sans-serif;
    color:#263238;
    font-size: 18px;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
