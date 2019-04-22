<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-avatar :size="200">
        <img
          src="../static/images/ColinPowell.jpg"
          height="1200"
          width="933"
          alt="Colin Powell"
        >
      </v-avatar>
      <blockquote class="blockquote">
        &#8220;Success is the result of perfection, hard work, learning from failure, loyalty to those for whom you work and persistence.&#8221;
        <footer>
          <small>
            <em>&mdash;Colin Powell</em>
          </small>
        </footer>
      </blockquote>
      <serviceCard 
        v-for="(service, index) in services" 
        :key="index" 
        :description="service.description"
        :service="service.service"
        :image="service.image"
      />
      <v-card-actions>
        <v-btn color="primary" flat nuxt to="/about">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn color="primary" flat nuxt to="/skills">
          <v-icon>arrow_forward</v-icon>
        </v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>

<style >
</style>

<script>
import ServiceCard from '~/components/ServiceCard.vue'

export default {
  components: {
    ServiceCard
  },
  data: () => ({
    services: [
      {
        id: 1,
        service: 'Web Development',
        image: require('../static/images/WebDev.jpg'),
        description:
          'From local development to production using latest best practices in all stages of development for a well rounded product. This includes SEO for a broader reach of users and abiltity to scale product.'
      },
      {
        id: 2,
        service: 'Web Design',
        image: require('../static/images/WebDesign.jpg'),
        description:
          'User first design paradigm to enable a flawless user experience. Responsive design and speed optimized for seemless and on the go experience. Limited but relevant color palette that gives a theme around the product.'
      },
      {
        id: 3,
        service: 'Security',
        image: require('../static/images/Security.jpg'),
        description:
          'Secure yet simple user experience. No worry of sensitive information being misused or malware attacking your computer. Along with user experience, security is a feature that is not only needed but also proves legitimacy of a product.'
      }
    ]
  }),
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
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
        this.$router.push('skills')
      } else if (event.keyCode === 37) {
        this.$router.push('about')
      }
    }
  }
}
</script>
