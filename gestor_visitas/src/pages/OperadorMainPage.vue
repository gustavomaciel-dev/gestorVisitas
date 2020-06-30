<template>
  <div>
    Panel de Operador
  </div>
</template>
<script>
export default {
  name: 'OperadorMainPage',
  beforeCreate: function () {
    console.log(this.$store.getters['gestorVisitas/isLogged'])
    if (!this.$store.getters['gestorVisitas/isLogged']) {
      this.$router.push('/')
    }
  }
}
</script>
