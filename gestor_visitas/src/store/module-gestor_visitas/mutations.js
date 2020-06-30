export default {
  login: function (state, data) {
    state.username = data.username
    state.nombre = data.nombre
    state.apellido = data.apellido
    state.rolId = data.rolId
    state.rolDescripcion = data.rolDescripcion
    state.token = data.token
    state.usuarioId = data.usuarioId
  },
  logout: function (state, data) {
    state.username = null
    state.nombre = null
    state.apellido = null
    state.rolId = null
    state.rolDescripcion = null
    state.token = null
    state.usuarioId = null
    state.visitas = []
  },
  visitas: function (state, data) {
    state.visitas = []
    const misVisitas = data.visitas
    misVisitas.forEach(visita => {
      const visitaJson = JSON.parse(visita)
      state.visitas.push({
        fecha: visitaJson.fechaVisita,
        hora: visitaJson.horaVisita,
        direccion: visitaJson.direccion,
        visitaId: visitaJson.id,
        pacienteId: visitaJson.paciente_id
      })
    })
  },
  cargar_profesionales: function (state, data) {
    state.profesionales = []
    const profesionales = data.profesionales
    profesionales.forEach(profesional => {
      const profesionalJS = JSON.parse(profesional)
      state.profesionales.push({
        label: profesionalJS.nombre + ' ' + profesionalJS.apellido,
        value: profesionalJS.id
      })
    })
  }
}
