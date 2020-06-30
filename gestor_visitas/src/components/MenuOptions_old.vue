<template>
  <q-item
    clickable
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-btn
      v-go-back=" '/profesional' "
      color="primary"
      label="Logout"
    />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'MenuOptions',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
