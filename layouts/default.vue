<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-flex mt-3 align-center justify-center layout text-xs-center>
        <v-avatar :size="150">
          <img
            src="../static/BBlogo.png"
            height="500"
            width="500"
            alt="Byron Brown"
          >
        </v-avatar>
      </v-flex>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      dark
      height="auto"
      :fixed="fixed"
      app
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-divider />
        <v-card-actions class="grey darken-3 justify-center">
          &copy;2019 — <strong>BBrown</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'person',
          title: 'About Me',
          to: '/about'
        },
        {
          icon: 'business_center',
          title: 'Services',
          to: '/services'
        },
        {
          icon: 'assessment',
          title: 'Skill Set',
          to: '/skills'
        },
        {
          icon: 'school',
          title: 'Education',
          to: '/education'
        },
        {
          icon: 'work',
          title: 'Professional Experience',
          to: '/experience'
        },
        {
          icon: 'view_list',
          title: 'My Work',
          to: '/work'
        },
        {
          icon: 'mail',
          title: 'Contact Me',
          to: '/contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BBrown'
    }
  }
}
</script>
