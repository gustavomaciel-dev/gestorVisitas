<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        OK
      </div>

      <div class="text-h2" style="opacity:.4">
        La operación se realizó con éxito...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="alta"
        label="Aceptar"
        no-caps
      />
    </div>
  </div>
</template>

<script >
export default {
  name: 'AdminAltaOKPage'
}
</script>
