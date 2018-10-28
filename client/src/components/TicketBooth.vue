<template>
  <div>
    <form :style='formStyling'>
      <label :style='labelStyling'>Email:</label>
      <input :style='inputStyling'>
      <label :style='labelStyling'>Password:</label>
      <input :style='inputStyling'>
      <button :style='buttonStyling'>Sign Up!</button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    formStyling: function () {
      return {
        position: 'absolute',
        width: '500px',
        height: '100x',
        margin: '80px 650px',
        border: '3px solid black'
      }
    },
    labelStyling: function () {
      return {
        display: 'block',
        width: '400px',
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '0 auto'
      }
    },
    inputStyling: function () {
      return {
        display: 'block',
        width: '400px',
        padding: '12px 20px',
        fontSize: '16px',
        margin: '0 auto'
      }
    },
    buttonStyling: function () {
      return {
        margin: '10px 0px',
        fontSize: '24px'
      }
    }
  }
}
</script>
