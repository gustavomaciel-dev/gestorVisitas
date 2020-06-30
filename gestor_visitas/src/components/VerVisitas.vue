<template>
  <q-table
    title="Visitas"
    :data="tableData"
    :columns="columns"
    row-key="name"
  />
</template>
<script>
export default {
  computed: {
    tableData: function () {
      return this.$store.state.gestorVisitas.visitas
    }
  },
  data: () => ({
    columns: [
      {
        name: 'fecha',
        required: true,
        label: 'Fecha',
        align: 'left',
        field: 'fechaVisita',
        sortable: true
      },
      {
        name: 'Hora',
        required: true,
        label: 'Hora',
        align: 'left',
        field: 'hora',
        sortable: true
      },
      {
        name: 'direccion',
        required: true,
        label: 'Direccion',
        align: 'left',
        field: 'direccion',
        sortable: false
      },
      {
        name: 'telefono',
        required: false,
        label: 'Telefono',
        align: 'left',
        field: 'telefono',
        sortable: false
      }
    ]
  })
}
</script>
