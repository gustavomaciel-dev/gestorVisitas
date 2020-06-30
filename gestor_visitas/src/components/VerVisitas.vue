<template>
  <q-table
    title="Visitas"
    :data="datosVisitas"
    :columns="columns"
    row-key="name"
  />
</template>
<script>
export default {
  name: 'VerVisitas',
  props: {
    datosVisitas: {
      type: Array
    }
  },
  data: () => ({
    columns: [
      {
        name: 'fecha',
        required: true,
        label: 'Fecha',
        align: 'left',
        field: 'fecha',
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
      }
    ]
  })
}
</script>
