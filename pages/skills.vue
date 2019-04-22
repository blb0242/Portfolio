<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-avatar :size="200">
        <img
          src="../static/images/MayaAngelou.jpg"
          height="2234"
          width="1800"
          alt="Maya Angelou"
        >
      </v-avatar>
      <blockquote class="blockquote">
        &#8220; …strength lined with tenderness is an unbeatable combination, as are intelligence and necessity when blunted by formal education.&#8221;
        <footer>
          <small>
            <em>&mdash;Maya Angelou</em>
          </small>
        </footer>
      </blockquote>
      <div class="text-xs-center">
        <v-progress-circular
          v-for="(skill, index) in skills" 
          :key="index" 
          :rotate="0"
          :size="100"
          :width="15"
          :value="skill.value"
          :color="skill.color"
        >
          {{ skill.name }}
          {{ skill.value }}%
        </v-progress-circular>
      </div>
      <v-card-actions>
        <v-btn color="primary" flat nuxt to="/services">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn color="primary" flat nuxt to="/education">
          <v-icon>arrow_forward</v-icon>
        </v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>

<script>
export default {
  data: () => ({
    skills: [
      {
        name: 'HTML',
        interval: {},
        value: 0,
        max: 100,
        color: 'teal'
      },
      {
        name: 'CSS',
        interval: {},
        value: 0,
        max: 90,
        color: 'red'
      },
      {
        name: 'JavaScript',
        interval: {},
        value: 0,
        max: 85,
        color: 'blue'
      },
      {
        name: 'PHP',
        interval: {},
        value: 0,
        max: 90,
        color: 'orange'
      },
      {
        name: 'C/C++',
        interval: {},
        value: 0,
        max: 90,
        color: 'black'
      },
      {
        name: 'VueJS',
        interval: {},
        value: 0,
        max: 75,
        color: 'green'
      },
      {
        name: 'Laravel',
        interval: {},
        value: 0,
        max: 80,
        color: 'pink'
      }
    ]
  }),
  created: function() {
    window.addEventListener('keydown', this.changePage)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.changePage)
    for (let i = this.skills.length - 1; i >= 0; i--) {
      clearInterval(this.skills[i].interval)
    }
  },
  mounted() {
    for (let i = this.skills.length - 1; i >= 0; i--) {
      this.skills[i].interval = setInterval(() => {
        if (this.skills[i].value === this.skills[i].max) {
          return
        }
        this.skills[i].value += 5
      }, 100)
    }
  },
  methods: {
    changePage: function() {
      if (event.keyCode === 39) {
        this.$router.push('education')
      } else if (event.keyCode === 37) {
        this.$router.push('services')
      }
    }
  }
}
</script>
