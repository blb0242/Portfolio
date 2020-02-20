<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-btn
        color="green"
        nuxt 
        to="/"
        dark
        bottom
        left
        fixed
        fab
      >
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-btn
        color="green"
        nuxt 
        to="/services"
        dark
        bottom
        right
        fixed
        fab
      >
        <v-icon>arrow_forward</v-icon>
      </v-btn>
      <v-avatar :size="200">
        <img
          src="../static/images/MarianAnderson.jpg"
          height="500"
          width="500"
          alt="Marian Anderson"
        >
      </v-avatar>
      <v-flex>
        <blockquote class="blockquote">
          &#8220;None of us is responsible for the complexion of his skin. This fact…offers no clue to the character or quality of the person.&#8221;
          <footer>
            <small>
              <em>&mdash;Marian Anderson</em>
            </small>
          </footer>
        </blockquote>
      </v-flex>
      <v-flex>
        <v-card :elevation="20" class="mx-auto" max-width="400">
          <v-avatar :size="200">
            <img
              class="mt-4 pt-3"
              src="../static/images/Byron2.JPG"
              alt="Byron Brown"
            >
          </v-avatar>
          <v-card-title primary-title>
            <v-flex mt-2 pt-3 text-xs-center>
              <div class="headline">
                Web Developer/ Designer
              </div>
              <span class="grey--text">Byron Brown</span><br>
              <span>Dallas, Texas</span><br>
              <span>Age 27</span>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="show">
              Born and raised in the lovely city of Dallas, TX. I have gained a passion about the web just as I did for basketball. Im always trying to learn about web technologies and practice them when I can. Now I'm working as a Web Technical Support Engineer I for DealerSocket, a software company dedicated to driving the Automotive Industry with SAAS(Software As A Service).
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  transition: 'slide-fade',
  data: () => ({
    show: false,
    page: 1
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
    console.log(this.$router.options.routes[0].path)
    window.addEventListener('keydown', this.changePage)
  },
  beforeDestroy: function() {
    window.removeEventListener('keydown', this.changePage)
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
        this.$router.push(this.$router.options.routes[prevPage].path)
      }
      return this.$router.options.routes[prevPage].path
    }
  }
}
</script>
