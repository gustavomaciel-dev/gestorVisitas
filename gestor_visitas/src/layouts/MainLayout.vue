<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
        Agenda médica
        </q-toolbar-title>
        <div>Usuario: {{ username }}  -  Nombre: {{ nombreCompleto }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu de {{ rolDescripcion }}
        </q-item-label>
        <MenuOptions
          v-for="link in menuOptions"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuOptions from 'components/MenuOptions.vue'

export default {
  name: 'MainLayout',

  components: {
    MenuOptions
  },
  computed: {
    username: function () {
      console.log(this.$store.state.gestorVisitas.username)
      return this.$store.state.gestorVisitas.username
    },
    nombreCompleto: function () {
      return this.$store.state.gestorVisitas.nombre + ' ' + this.$store.state.gestorVisitas.apellido
    },
    rolDescripcion: function () {
      return this.$store.state.gestorVisitas.rolDescripcion
    }
  },
  data () {
    let opcionesMenu
    const rolId = this.$store.state.gestorVisitas.rolId
    switch (rolId) {
      case 1: // admin
        opcionesMenu = [
          {
            title: 'Alta Operador',
            icon: 'settings_applications',
            link: '/#/admin/operador/alta'
          },
          {
            title: 'Alta Profesional',
            icon: 'miscellaneous_services',
            link: '/#/admin/profesional/alta'
          },
          {
            title: 'Logout',
            icon: 'power_settings_new',
            link: '/'
          }
        ]
        break
      case 2: // Profesional
        opcionesMenu = [
          {
            title: 'Mis visitas programadas',
            icon: 'event_note',
            link: '/#/profesional/visitas/listar'
          },
          {
            title: 'Cancelar visita',
            icon: 'clear',
            link: ''
          },
          {
            title: 'Logout',
            icon: 'power_settings_new',
            link: '/'
          }
        ]
        break
      case 3: // Operador
        opcionesMenu = [
          {
            title: 'Generar visita',
            icon: 'note_add',
            link: '/#/operador/visita/alta'
          },
          {
            title: 'Consultar visita',
            icon: 'search',
            link: ''
          },
          {
            title: 'Cancelar visitas',
            icon: 'code',
            link: ''
          },
          {
            title: 'Logout',
            icon: 'power_settings_new',
            link: '/'
          }
        ]
        break
      default:
        opcionesMenu = [
          {
            title: 'Logout',
            icon: 'power_settings_new',
            link: ''
          }
        ]
        break
    }

    return {
      leftDrawerOpen: false,
      menuOptions: opcionesMenu
    }
  }
}
</script>
