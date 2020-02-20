const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Byron Brown | Web Development & Design in Dallas, TX',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:url', content: 'http://www.byronlbrown.com' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Byron Brown | Web Development & Design in Dallas, TX'
      },
      {
        property: 'og:description',
        content: pkg.description
      },
      { property: 'og:image', content: 'http://byronlbrown.com/BBlogo.png' },
      { property: 'og:site_name', content: 'Byron Brown' },
      { property: 'fb:app_id', content: '580005275854496' },
      { name: 'twitter:url', content: 'http://www.byronlbrown.com' },
      {
        name: 'twitter:title',
        content: 'Byron Brown | Web Development & Design in Dallas, TX'
      },
      {
        name: 'twitter:description',
        content: pkg.description
      },
      { name: 'twitter:image', content: 'http://byronlbrown.com/BBlogo.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'pinterest', content: 'nopin' },
      { name: 'keywords', content: 'Biography, Web, Developer, Design' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue',

  /*
   ** Global CSS
   */
  css: ['~/assets/style/main.css','~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  transition: {
    name: 'fade',
    mode: 'out',
    beforeEnter (el) {
      console.log('Before enter...');
    }
  }
}
