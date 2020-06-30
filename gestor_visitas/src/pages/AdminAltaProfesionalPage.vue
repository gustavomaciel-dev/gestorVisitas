<template>
  <q-page class="flex flex-center">
    <q-form
      v-on:submit="saveUser"
      v-on:reset="reset"
    >
      <q-input
        filled
        v-model="username"
        label="Ingresar Usuario"
        hint=""
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Debe ingresar Usuario']"
      />
      <q-input
        filled
        type="password"
        v-model="password"
        label="Ingresar Contraseña"
        hint=""
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Debe ingresar Password']"
      />
      <q-input
        filled
        v-model="dni"
        label="Ingresar Dni"
        hint=""
        lazy-rules
        :rules="[ val => val && val.length == 8 || 'Debe ingresar los 8 digitos del Dni']"
      />
      <q-input
        filled
        v-model="matricula"
        label="Ingresar Matricula"
        hint=""
        lazy-rules
        :rules="[ val => val && val.length == 10 || 'Debe ingresar los 10 digitos de la Matricula']"
      />
      <q-input
        filled
        v-model="nombre"
        label="Ingresar Nombre"
        hint=""
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Debe ingresar Nombre']"
      />
      <q-input
        filled
        v-model="apellido"
        label="Ingresar Apellido"
        hint=""
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Debe ingresar Apellido']"
      />
      <div>
        <q-btn label="Guardar" type="submit" color="primary"/>
        <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </q-page>
</template>

<script>
export default {
  name: 'AdminAltaProfesionalPage',
  data () {
    return {
      username: '',
      password: '',
      dni: '',
      nombre: '',
      apellido: '',
      rol: '',
      matricula: ''
    }
  },
  beforeCreate: function () {
    if (!this.$store.getters['gestorVisitas/isLogged']) {
      this.$router.push('/')
    }
  },
  methods: {
    saveUser: function () {
      const formData = new FormData()
      formData.set('username', this.username)
      formData.set('password', this.password)
      formData.set('nombre', this.nombre)
      formData.set('apellido', this.apellido)
      formData.set('dni', this.dni)
      formData.set('matricula', this.matricula)
      formData.set('rol', 2)
      this.$axios.post('http://127.0.0.1:9001/usuario', formData)
        .then((response) => {
          console.log('usuario generado id -> ' + response.data.usuarioId)
          this.$router.push('ok')
        }).catch(function (error) {
          console.log(error)
        })
    },
    reset: function () {
      this.username = ''
      this.password = ''
      this.dni = ''
      this.nombre = ''
      this.apellido = ''
      this.rol = ''
      this.matricula = ''
    }
  }
}
</script>
