<template>
  <v-layout>
    <v-btn
      color="green"
      nuxt 
      to="work"
      dark
      bottom
      left
      fixed
      fab
    >
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-flex>
      <v-flex mt-5 text-xs-center>
        <v-flex xs12 sm6 offset-sm3>
          <v-flex v-touch:start="touchHandler" v-touch-class="'active'" class="flip-card">
            <div class="flip-card-inner">
              <v-card class="flip-card-front" />
              <v-card class="flip-card-back">
                <v-img
                  class="white--text"
                  height="150px"
                  src="https://images.pexels.com/photos/1936299/pexels-photo-1936299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex align-end flexbox>
                        <span class="headline" />
                      </v-flex>
                      <v-avatar :size="100">
                        <img
                          src="../static/BBlogo.png"
                          height="500"
                          width="500"
                          alt="Byron Brown Logo"
                        >
                      </v-avatar>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <v-flex text-xs-center>
                    <span class="grey--text">Byron Brown</span><br>
                    <span>Web Developer/ Designer</span><br>
                    <span>Dallas, TX</span><br>
                    <v-btn
                      href="mailto:bbrown@byronlbrown.com?Subject=Hello%20Byron"
                      small
                      top
                      flat
                      color="green"
                    >
                      <v-icon>email</v-icon>: bbrown@byronlbrown.com
                    </v-btn>
                    <v-btn href="tel://+14693283493" small top flat color="green">
                      <v-icon>phone_iphone</v-icon>: (469) 328 - 3493
                    </v-btn>
                  </v-flex>
                </v-card-title>
                <v-card-actions />
              </v-card>
            </div>
          </v-flex>
        </v-flex>
      </v-flex>
      <v-card-title class=" mt-5 green darken-2">
        <strong class="subheading">Get connected with me on social networks!</strong>
        <v-spacer />
        <v-btn
          v-for="social in socialMedia"
          :key="social.icon"
          class="mx-3"
          dark
          icon
          target="_blank"
          :href="social.link"
        >
          <v-icon size="24px">
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <div>Logo made with <a href="https://www.designevo.com/en/" title="Free Online Logo Maker">DesignEvo</a></div>
    </v-flex>
  </v-layout>
</template>

<style>
.flip-card {
  position: relative;
  background-color: transparent;
  width: 100%;
  height: 350px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card.active .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background: url('../static/BBlogo.png') no-repeat center center;
  background-size: cover;
  height: 100%;
  min-width: 100%;
  overflow: hidden;
  color: black;
  z-index: 2;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
  z-index: 1;
}
</style>


<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)

export default {
  transition: 'slide-fade',
  data: () => ({
    hover: false,
    name: '',
    email: '',
    message: '',
    select: '',
    items: ['Personal', 'Business'],
    dictionary: {
      attributes: {
        email: 'E-mail Address'
        // custom attributes
      },
      custom: {
        name: {
          required: () => 'Name can not be empty',
          max: 'The name field may not be greater than 10 characters'
          // custom messages
        },
        select: {
          required: 'Inquiry Type is required'
        }
      }
    },
    socialMedia: [
      {
        icon: 'fab fa-facebook',
        link: 'https://www.facebook.com/b.brown32'
      },
      {
        icon: 'fab fa-twitter',
        link: 'https://twitter.com/ImJust_Byron'
      },
      {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/byron-brown-914b90150/'
      },
      {
        icon: 'fab fa-github',
        link: 'https://www.github.com/blb0242/'
      },
      {
        icon: 'fab fa-instagram',
        link: 'https://www.instagram.com/Imjust_byron/'
      }
    ],
    page: 7
  }),
  computed: {
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
      const prevPage = this.page - 1
      if (event.keyCode === 39) {
        console.log(this.$router.options.routes[prevPage].path)
        this.$router.push(this.$router.options.routes[prevPage].name)
      }
      return this.$router.options.routes[prevPage].path
    },
    touchHandler(event) {
      console.log(event) // May be left / right / top / bottom
    }
  }
}
</script>
