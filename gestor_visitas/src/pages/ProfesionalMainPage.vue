<template>
  <div>
    Panel del Profesional
  </div>
</template>
<script>
export default {
  name: 'ProfesionalMainPage',
  beforeCreate: function () {
    if (!this.$store.getters['gestorVisitas/isLogged']) {
      this.$router.push('/')
    }
  }
}
</script>
