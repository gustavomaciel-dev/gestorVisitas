<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-form
          v-on:submit="guardarVisita"
          v-on:reset="reset"
        >
          <q-input style="display:none"
            filled
            v-model="idPaciente"
            label="ID paciente"
            hint=""
            lazy-rules
            visibility="hidden"
          />
          <q-btn style="float:right; margin-top:10px" icon="search" label="Buscar" @click="buscarPaciente"/>
          <q-input
            filled
            v-model="dni"
            label="Ingresar Dni paciente"
            hint=""
            lazy-rules
            :rules="[ val => val && val.length == 8 || 'Debe ingresar los 8 digitos del Dni']"
          />
          <q-input :disable="true"
            filled
            v-model="nombre"
            label="Nombre"
            hint=""
            lazy-rules
          />
          <q-input :disable="true"
            filled
            v-model="apellido"
            label="Apellido"
            hint=""
            lazy-rules
          />
          <q-input
            filled
            v-model="direccion"
            label="Dirección"
            hint=""
            lazy-rules
          />
          <q-input filled v-model="fechaVisita" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="fechaVisita" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input filled v-model="horaVisita" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="horaVisita" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-select filled v-model="model" :options="profesionales" label="Profesional" />
          <div>
            <q-btn label="Guardar" type="submit" color="primary"/>
            <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'OperadorGenerarVisitaPage',
  data () {
    return {
      model: null,
      horaVisita: '10:00',
      idPaciente: '',
      idProfesional: '',
      fechaVisita: '2020/06/30',
      dni: '',
      nombre: '',
      apellido: '',
      direccion: ''
    }
  },
  beforeCreate: function () {
    if (!this.$store.getters['gestorVisitas/isLogged']) {
      this.$router.push('/')
    }
    console.log('Buscando profesionales')
    const formData = new FormData()
    this.$axios.post('http://127.0.0.1:9001/profesionales', formData)
      .then((response) => {
        console.log('profesionales encontrados ' + response.data)
        this.$store.commit('gestorVisitas/cargar_profesionales', {
          profesionales: response.data
        })
      }).catch(function (error) {
        console.log(error)
      })
  },
  computed: {
    profesionales: function () {
      return this.$store.getters['gestorVisitas/getProfesionales']
    }
  },
  methods: {
    guardarVisita: function () {
      const formData = new FormData()
      formData.set('idPaciente', this.idPaciente)
      formData.set('idProfesional', this.model.value)
      formData.set('fechaVisita', this.fechaVisita)
      formData.set('horaVisita', this.horaVisita)
      formData.set('direccion', this.direccion)
      this.$axios.post('http://127.0.0.1:9001/visita', formData)
        .then((response) => {
          console.log('visita generada id -> ' + response.data.visitaId)
          this.$router.push('ok')
        }).catch(function (error) {
          console.log(error)
        })
    },
    buscarPaciente: function () {
      console.log('Buscando paciente -> ' + this.dni)
      const formData = new FormData()
      formData.set('dni', this.dni)
      this.$axios.post('http://127.0.0.1:9001/paciente', formData)
        .then((response) => {
          console.log('paciente consultado Id -> ' + response.data.id)
          this.nombre = response.data.nombre
          this.apellido = response.data.apellido
          this.direccion = response.data.direccion
          this.idPaciente = response.data.id
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
    },
    mounted: function () {
      this.model = [{
        label: 'Gonzalez',
        value: '1'
      },
      {
        label: 'Maciel',
        value: '2'
      },
      {
        label: 'Olivera',
        value: '3'
      },
      {
        label: 'Mendez',
        value: '4'
      }]
    }
  }
}
</script>
