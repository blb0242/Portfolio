<template>
  <v-layout>
    <v-flex text-xs-center>
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
        <v-card :elevation="20">
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
              <span>Age 26</span>
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
              Born and raised in the lovely city of Dallas, TX. Before I became a web developer I was a basketball player, specifically a point guard. I always had a dream of making the NBA but soon realized my 5'11" height was going to make it very hard to make the NBA. So, I decided maybe I should care bout learning things more so I can have something to depend on if the basketball thing doesnt work. 6 1/2 years of college and a year out of school, here I am. Took me a while to realize that only having a degree wasnt going to get me in a career easily, so I began to build my portfolio. Now, my spare time is dedicated to finding a job, build my portfolio by doing freelance jobs, taking care of my daughter and delivering pizza at i Fratelli Pizza. With more work and a little bit of luck I know my NBA dream that is now a Software Developer dream, will come true soon.
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
      <v-card-actions>
        <v-btn color="primary" flat nuxt to="/">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn color="primary" flat nuxt to="/services">
          <v-icon>arrow_forward</v-icon>
        </v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    show: false
  }),
  created: function() {
    window.addEventListener('keydown', this.changePage)
  },
  beforeDestroy: function() {
    window.removeEventListener('keydown', this.changePage)
  },
  methods: {
    changePage: function() {
      if (event.keyCode === 39) {
        this.$router.push('services')
      } else if (event.keyCode === 37) {
        this.$router.push('/')
      }
    }
  }
}
</script>
