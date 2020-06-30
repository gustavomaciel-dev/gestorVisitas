<template>
  <div>
    <h4> {{ nombreCompleto }} </h4>
    <VerVisitas :datosVisitas="misVisitas"></VerVisitas>
  </div>
</template>

<script>
import VerVisitas from 'components/VerVisitas.vue'

export default {
  name: 'ProfesionalListarVisitas',
  components: {
    VerVisitas
  },
  beforeCreate: function () {
    if (!this.$store.getters['gestorVisitas/isLogged']) {
      this.$router.push('/')
    }
    const profesionalId = this.$store.state.gestorVisitas.usuarioId
    const formData = new FormData()
    formData.set('profesionalId', profesionalId)
    this.$axios.post('http://127.0.0.1:9001/profesional/visitas', formData)
      .then((response) => {
        this.$store.commit('gestorVisitas/visitas', {
          visitas: response.data
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  computed: {
    nombreCompleto: function () {
      return this.$store.state.gestorVisitas.nombre + ' ' + this.$store.state.gestorVisitas.apellido
    },
    misVisitas: function () {
      return this.$store.state.gestorVisitas.visitas
    }
  }
}
</script>
