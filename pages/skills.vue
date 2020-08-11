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
    </v-flex>
  </v-layout>
</template>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>

<script>
export default {
  transition: 'slide-fade',
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
        name: 'JS',
        interval: {},
        value: 0,
        max: 90,
        color: 'yellow'
      },
      {
        name: 'PHP',
        interval: {},
        value: 0,
        max: 90,
        color: 'orange'
      },
      {
        name: 'SQL',
        interval: {},
        value: 0,
        max: 90,
        color: 'purple'
      },
      {
        name: 'C/C++',
        interval: {},
        value: 0,
        max: 90,
        color: 'black'
      },
      {
        name: 'Python',
        interval: {},
        value: 0,
        max: 75,
        color: 'grey'
      },
      {
        name: 'ReactJS',
        interval: {},
        value: 0,
        max: 75,
        color: 'blue'
      },
      {
        name: 'VueJS',
        interval: {},
        value: 0,
        max: 75,
        color: 'green'
      },
      {
        name: 'NodeJS',
        interval: {},
        value: 0,
        max: 80,
        color: 'pink'
      }
    ],
    page: 3
  }),
  computed: {
    nextPage: function() {
      const nextPage = this.page + 1
      console.log(nextPage)
      console.log(this.$router.options.routes[nextPage].path)
      return this.$router.options.routes[nextPage].path
    },
    prevPage: function() {
      const prevPage = this.page - 1
      console.log(prevPage)
      console.log(this.$router.options.routes[prevPage].path)
      return this.$router.options.routes[prevPage].path
    }
  },
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
      const nextPage = this.page + 1
      const prevPage = this.page - 1
      if (event.keyCode === 39) {
        console.log(this.$router.options.routes[nextPage].path)
        this.$router.push(this.$router.options.routes[nextPage].name)
      } else if (event.keyCode === 37) {
        console.log(this.$router.options.routes[prevPage].path)
        this.$router.push(this.$router.options.routes[prevPage].name)
      }
      return this.$router.options.routes[prevPage].path
    }
  }
}
</script>
