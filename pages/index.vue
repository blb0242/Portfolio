<template>
  <v-layout @keyup.enter="nextPage">
    <v-flex text-xs-center>
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
            Hi, I'm Byron Brown the Web Designer/ Developer
          </v-card-title>
          <v-card-text>
            <p>Welcome to my portfolio website. I hope you can learn a lot about me and about my work. Don't be shy to contact me about anything that relates to my work or the services I offer.</p>
            
            <p>Thank you for visiting and I hope to talk to you and work with you soon.</p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" flat nuxt to="/about">
          <v-icon>arrow_forward</v-icon>
        </v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data() {
    return {
      next: 'arrow-right',
      name: 'Beezy'
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
      if (event.keyCode === 39) {
        this.$router.push('about')
      }
    }
  }
}
</script>
