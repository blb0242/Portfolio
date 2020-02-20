<template>
  <v-btn
    :color="color"
    nuxt 
    :to="route"
    dark
    medium
    absolute
    bottom
    :position="position"
    fab
  >
    <v-icon>{{ direction }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'string'
    },
    route: {
      type: String,
      default: 'string'
    },
    position: {
      type: String,
      default: 'string'
    },
    direction: {
      type: String,
      default: 'string'
    }
  }
}
</script>
