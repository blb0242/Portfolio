<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-avatar :size="200">
        <img
          src="../static/images/ossie-davis.jpg"
          height="1240"
          width="1200"
          alt="Ossie Davis"
        >
      </v-avatar>
      <blockquote class="blockquote">
        &#8220;Any form of art is a form of power; it has impact, it can affect change – it can not only move us, it makes us move.&#8221;
        <footer>
          <small>
            <em>&mdash;Ossie Davis</em>
          </small>
        </footer>
      </blockquote>
      <v-timeline align-top>
        <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon" fill-dot>
          <span slot="opposite" :class="`headline font-weight-bold ${item.color}--text`" v-text="item.date" />
          <v-card :elevation="24" :color="item.color">
            <v-img
              :src="item.image"
              height="200px"
            />
            <v-card-title class="title">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="black text--primary">
              <p>{{ item.description }}</p>
              <v-btn :color="item.color" :href="item.url" class="mx-0" outline>
                Visit
              </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      <v-card-actions>
        <v-btn color="primary" flat nuxt to="/experience">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn color="primary" flat nuxt to="/contact">
          <v-icon>arrow_forward</v-icon>
        </v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        color: 'red',
        icon: 'person',
        title: 'Tizzy Visions',
        url: 'http://www.tizzyvisions.com/',
        image: require('../static/images/tizzyvisions.png'),
        description:
          'Portfolio website that displays videography work from Chayce Tisdale. This was my very first site that I fully started and still maintain to this day. Everything made from scratch using MaterializeCSS, PHP, and JavaScript. The key dynamic to the Tizzy Visions is the use of the YouTube Data API to display videos.',
        date: 'April, 2018'
      },
      {
        color: 'purple',
        icon: 'shopping_basket',
        title: "Beverly's Closet",
        url: 'https://www.beverlyscloset.store/',
        image: require('../static/images/beverlyscloset.png'),
        description:
          'E-commerce website that sells hand-crafted items such as purses and gift baskets sold by Beverly Mitchell. Made using MaterializeCSS that features a card masonry layout for displaying products. The website backend was made from scratch using PHP and Stripe payment gateway.',
        date: 'June, 2018'
      },
      {
        color: 'green',
        icon: 'wifi',
        title: 'Wire-Free Tech',
        url: 'https://www.wire-freetech.com/',
        image: require('../static/images/wire-freetech.png'),
        description:
          'E-commerce website that uses a droppshing business model approach by importing products from AliExpress.com. Simple grid layout throughout site using Shopify theme.',
        date: 'Februrary, 2019'
      },
      {
        color: 'indigo',
        icon: 'directions_car',
        title: 'Yount MS',
        url: 'https://www.yountmotorsports.com/',
        image: require('../static/images/yountmotorsports.png'),
        description:
          'Standard company website for Yount Motorsports, a racing company. The site features recent news blogs, galleries for race events, and other company information. The site was built with Wix and I was a contributor on various components of the site.',
        date: 'Februrary, 2019'
      }
    ]
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
        this.$router.push('contact')
      } else if (event.keyCode === 37) {
        this.$router.push('experience')
      }
    }
  }
}
</script>
