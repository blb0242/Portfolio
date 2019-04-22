<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 20 : 2}`"
      class="experienceCard mt-4"
      :color="color"
    >
      <v-layout>
        <v-flex xs7>
          <v-card-title primary-title>
            <div>
              <div class="headline">
                {{ name }}
              </div>
              <div>{{ job }}</div>
              <div>({{ time }})</div>
            </div>
          </v-card-title>
        </v-flex>
        <v-flex xs5>
          <v-img
            height="125px"
            :src="image"
            contain
          />
        </v-flex>
      </v-layout>
    </v-card>
  </v-hover>
</template>

<style>
.experienceCard {
  border-radius: 20px;
}
</style>

<script>
export default {
  props: {
    job: {
      type: String,
      default: 'string'
    },
    name: {
      type: String,
      default: 'string'
    },
    time: {
      type: String,
      default: 'string'
    },
    color: {
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
