<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-avatar :size="200">
        <img
          src="../static/images/MolefiAsante.jpg"
          height="500"
          width="500"
          alt="Molefi Kete Asante"
        >
      </v-avatar>
      <blockquote class="blockquote">
        &#8220;A wise person speaks carefully and with truth, for every word that passes between one’s teeth is meant for something..&#8221;
        <footer>
          <small>
            <em>&mdash;Molefi Kete Asante</em>
          </small>
        </footer>
      </blockquote>
      <v-flex 
        sm6
        lg6
        md6
        offset-sm3
        offset-md3
        offset-lg3
      >
        <ExperienceCard 
          v-for="(experience, index) in experiences.reverse()" 
          :key="index" 
          :description="experience.description"
          :name="experience.name"
          :job="experience.job"
          :image="experience.image"
          :time="experience.time"
          :color="experience.color"
        />
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import ExperienceCard from '~/components/ExperienceCard.vue'

export default {
  transition: 'slide-fade',
  components: {
    ExperienceCard
  },
  data: () => ({
    experiences: [
      {
        id: 1,
        job: 'Freelancer',
        name: 'Self-Employed',
        image: require('../static/images/WebDev.jpg'),
        time: '2018 - Present',
        description:
          'From local development to production using latest best practices in all stages of development for a well rounded product. This includes SEO for a broader reach of users and abiltity to scale product.',
        color: 'green darken-2'
      },
      {
        id: 2,
        job: 'Delivery Driver',
        name: 'i Fratelli Pizza',
        image: require('../static/images/fratelliLogo.png'),
        time: '2014 - 2019',
        description:
          'User first design paradigm to enable a flawless user experience. Responsive design and speed optimized for seemless and on the go experience. Limited but relevant color palette that gives a theme around the product.',
        color: '#E74B32'
      },
      {
        id: 3,
        job: 'Technical Support Engineer I',
        name: 'DealerSocket',
        image: require('../static/images/ds-logo.svg'),
        time: '2019 - Present',
        description:
          'User first design paradigm to enable a flawless user experience. Responsive design and speed optimized for seemless and on the go experience. Limited but relevant color palette that gives a theme around the product.',
        color: '#CE2026'
      }
    ],
    page: 5
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
