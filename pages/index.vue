<template>
  <v-layout @keyup.enter="nextPage">
    <v-flex text-xs-center>
      <v-btn
        color="green"
        nuxt 
        to="/about"
        dark
        bottom 
        fixed
        right
        fab
      >
        <v-icon>arrow_forward</v-icon>
      </v-btn>
      <v-avatar :size="200">
        <img
          src="../static/images/MLKJr.jpeg"
          height="1268"
          width="1728"
          alt="Martin Luther King Jr."
        >
      </v-avatar>
      
      <blockquote class="blockquote">
        &#8220;We must combine the toughness of the serpent and the softness of the dove, a tough mind and a tender heart.&#8221;
        <footer>
          <small>
            <em>&mdash;Martin Luther King, Jr.</em>
          </small>
        </footer>
      </blockquote>
      <v-flex>
        <v-card>
          <v-card-title class="headline">
            <h1 class="">
              Hi, I'm Byron Brown the Web Designer/ Developer
            </h1>
          </v-card-title>
          <v-card-text>
            <p>
              Welcome to my Web Developer/ Designer portfolio website created using VueJS. I hope you can learn a lot about me and about my work. Don't be shy to contact me about anything that relates to my work or the services I offer.
            </p>
            
            <p>Thank you for visiting and I hope to talk to you and work with you soon.</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-flex>
  </v-layout>
</template>
<style>
h1 {
  font-size: 35px;
}
</style>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  transition: 'slide-fade',
  data() {
    return {
      next: 'arrow-right',
      name: 'Beezy',
      page: 0
    }
  },
  computed: {
    nextPage: function() {
      const nextPage = this.page + 1
      console.log(nextPage)
      console.log(this.$router.options.routes[nextPage].path)
      return this.$router.options.routes[nextPage].path
    }
  },
  created: function() {
    window.addEventListener('keydown', this.changePage)
  },
  beforeDestroy: function() {
    window.removeEventListener('keydown', this.changePage)
  },
  methods: {
    changePage: function() {
      const nextPage = this.page + 1
      if (event.keyCode === 39) {
        const nextPage = this.page + 1
        console.log(this.$router.options.routes[nextPage].path)
        this.$router.push(this.$router.options.routes[nextPage].name)
      }
      return this.$router.options.routes[nextPage].path
    }
  }
}
</script>
