<template>
  <div class="home">
    <h1>HALAMAN HOME</h1>
    <h2>{{num}}</h2>
    <!-- <v-btn @click="tambah"><v-icon>md-plus</v-icon></v-btn> -->
    <v-btn fab dark color="indigo" @click="tambah">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: function(){
    return {
      number:0
    }
  },
  methods:{
    tambah: function(){
      this.$store.dispatch('angka')
    },

  },
  computed: {
    num: function(){
      return this.$store.state.num
    }
  }
  
}
</script>
