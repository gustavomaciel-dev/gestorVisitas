<template>
  <q-page class="flex flex-center">
    <q-form
      v-on:submit="login"
      v-on:reset="reset"
    >
      <q-input
        filled
        v-model="username"
        label="Ingrese Usuario"
        hint=""
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Debe ingresar Usuario']"
      />
      <q-input
        filled
        type="password"
        v-model="password"
        label="Contraseña"
        hint=""
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Debe ingresar Password']"
      />
      <div>
        <q-btn label="Ingresar" type="submit" color="primary"/>
        <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      /* TODO Verificar uss y pass. Obtener Rol. Redireccionar a la pagina que corresponde según el Rol */
      const formData = new FormData()
      formData.set('username', this.username)
      formData.set('password', this.password)
      this.$axios.post('http://127.0.0.1:9001/login', formData)
      /* this.$axios.post('http://127.0.0.1:9001/login', {
        username: this.username,
        password: this.password
      }) */
        .then((response) => {
          this.$store.commit('gestorVisitas/login', {
            username: this.username,
            nombre: response.data.nombre,
            apellido: response.data.apellido,
            rolId: response.data.rol,
            rolDescripcion: response.data.rolDescripcion,
            token: response.data.token,
            usuarioId: response.data.usuarioId
          })
          console.log('ROL ' + response.data.rol)
          console.log('NOMBRE ' + response.data.nombre)
          console.log('APELLIDO ' + response.data.apellido)
          console.log('USUARIO ID ' + response.data.usuarioId)
          let targetRoute
          switch (response.data.rol) {
            case 1:
              targetRoute = 'admin'
              break
            case 2:
              targetRoute = 'profesional'
              break
            case 3:
              targetRoute = 'operador'
              break
            default:
              targetRoute = 'login'
              break
          }
          this.$router.push(targetRoute)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    reset: function () {
      this.username = ''
      this.password = ''
    }
  }
}
</script>
