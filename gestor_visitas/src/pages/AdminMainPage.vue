<template>
  <div>
    Panel de Administrador de Usuarios
  </div>
</template>
<script>
export default {
  name: 'AdminMainPage',
  beforeCreate: function () {
    if (!this.$store.getters['gestorVisitas/isLogged']) {
      this.$router.push('/')
    }
  }
}
</script>
