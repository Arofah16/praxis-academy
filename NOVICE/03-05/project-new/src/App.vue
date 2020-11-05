<template>
  <!-- App.vue -->
  <v-app>
    <v-app-bar app color="red">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>CONTENT</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="blue">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />

      <v-list dense nav>
        <v-list-item link to="/" class="white">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/About" class="white">
          <v-list-item-icon>
            <v-icon>mdi-account-alert-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
        <v-row>
          <v-col cols="4">
            <v-card class="pa-2"> First, but last </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2"> Second, but unordered </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="pa-2"> Third, but first </v-card>
          </v-col>

          <!-- <v-col cols="12" sm="6" md="8">
              <v-card class="pa-2" outlined tile>
                .col-12 .col-sm-6 .col-md-8
              </v-card>
            </v-col> -->
        </v-row>
      </v-container>
    </v-main>
<!-- 
    <v-footer app padless="true">
      <v-card flat tile width="100%" class="red lighten-1 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer> -->

    <v-footer :padless="true">
      <v-card flat tile width="100%" class="red lighten-1 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  nama: "app",
  components: {},
  data: () => ({
    drawer: false,
  }),
};
</script>

