<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 20 : 2}`"
      class="serviceCard mx-auto mb-3 pa-1"
    >
      <v-img
        min-height="325"
        :src="image"
      />
      <v-card-title>
        <div>
          <span class="headline" />
          <div class="d-flex">
            <div class="text-xs-center grey--text">
              <h1>
                {{ service }}
              </h1>
              <p>{{ description }}</p>
            </div>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<style>
.serviceCard {
  border-radius: 50px;
}
</style>

<script>
export default {
  props: {
    description: {
      type: String,
      default: 'string'
    },
    service: {
      type: String,
      default: 'string'
    },
    image: {
      type: String,
      default: 'string'
    }
  }
}
</script>
