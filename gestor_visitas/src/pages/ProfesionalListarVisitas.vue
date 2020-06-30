<template>
  <div>
    <h4> {{ nombreCompleto }} </h4>
    <q-btn icon="search" label="Buscar" @click="getVisitas"
    />
    <VerVisitas></VerVisitas>
  </div>
</template>

<script>
import VerVisitas from 'components/VerVisitas.vue'

export default {
  name: 'ProfesionalListarVisitas',
  components: {
    VerVisitas
  },
  data () {
    return {
      profesionalId: this.$store.state.gestorVisitas.usuarioId
    }
  },
  beforeCreate: function () {
    if (!this.$store.getters['gestorVisitas/isLogged']) {
      this.$router.push('/')
    }
  },
  computed: {
    nombreCompleto: function () {
      return this.$store.state.gestorVisitas.nombre + ' ' + this.$store.state.gestorVisitas.apellido
    }
  },
  methods: {
    getVisitas: function () {
      const formData = new FormData()
      formData.set('profesionalId', this.profesionalId)
      console.log('Store previo ' + this.$store.state.gestorVisitas.visitas)
      this.$axios.post('http://127.0.0.1:9001/profesional/visitas', formData)
      /* this.$axios.post('http://127.0.0.1:9001/login', {
        username: this.username,
        password: this.password
      }) */
        .then((response) => {
          this.$store.commit('gestorVisitas/visitas', {
            visitas: response.data
          })
          console.log('VISITAS ' + response.data)
          console.log('Store post ' + this.$store.state.gestorVisitas.visitas)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
