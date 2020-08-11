<template>
  <v-layout>
    <v-flex>
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
      </v-flex>

      <v-container fluid>
        <v-layout row wrap>
          <serviceCard 
            v-for="(service, index) in services" 
            :key="index" 
            :description="service.description"
            :service="service.service"
            :image="service.image"
          />
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import ServiceCard from '~/components/ServiceCard.vue'

export default {
  transition: 'slide-fade',
  components: {
    ServiceCard
  },
  data: () => ({
    alignment: 'center',
    dense: false,
    justify: 'center',
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
    ],
    page: 2
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
