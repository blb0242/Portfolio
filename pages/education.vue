<template>
  <v-layout>
    <v-btn
      color="green"
      nuxt 
      to="/skills"
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
      to="/experience"
      dark
      bottom
      right
      fixed
      fab
    >
      <v-icon>arrow_forward</v-icon>
    </v-btn>
    <v-flex text-xs-center>
      <v-avatar :size="200">
        <img
          src="../static/images/FrederickDouglass.jpg"
          height="1723"
          width="1200"
          alt="Frederick Douglass"
        >
      </v-avatar>
      <blockquote class="blockquote">
        &#8220;A little learning, indeed, may be a dangerous thing, but the want of learning is a calamity to any people.&#8221;
        <footer>
          <small>
            <em>&mdash;Frederick Douglass</em>
          </small>
        </footer>
      </blockquote>
      <v-layout mt-3 row wrap>
        <v-flex
          sm6
          lg6
          md6
          offset-sm3
          offset-md3
          offset-lg3
        >
          <v-card color="green darken-2" class="white--text">
            <v-layout>
              <v-flex xs5 mt-3>
                <v-img
                  :src="UNTLogo"
                  height="125px"
                  contain
                />
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      University of North Texas
                    </div>
                    <div>Denton, TX</div>
                    <div>(2017)</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light />
            <v-card-actions class="pa-3">
              Bachelor's of Science 
              <v-spacer />
              Computer Science
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout> 
      <v-layout mt-3 row wrap>
        <v-flex
          sm6
          lg6
          md6
          offset-sm3
          offset-md3
          offset-lg3
        >
          <v-card color="orange darken-2" class="white--text">
            <v-layout>
              <v-flex xs5 mt-3>
                <v-img
                  :src="WTWLogo"
                  height="125px"
                  contain
                />
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      Warren Travis White High School
                    </div>
                    <div>Dallas, TX</div>
                    <div>(2010)</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light />
            <v-card-actions class="pa-3">
              Diploma 
              <v-spacer />
              General Studies
            </v-card-actions>
          </v-card>
        </v-flex>   
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  transition: 'slide-fade',
  data: () => ({
    UNTLogo: require('../static/images/UNTLogo.png'),
    WTWLogo: require('../static/images/WTWLogo.png'),
    page: 4
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
      if (event.keyCode === 39) {
        const nextPage = this.page + 1
        console.log(this.$router.options.routes[nextPage].path)
        this.$router.push(this.$router.options.routes[nextPage].name)
      } else if (event.keyCode === 37) {
        this.$router.push('skills')
      }
    }
  }
}
</script>
