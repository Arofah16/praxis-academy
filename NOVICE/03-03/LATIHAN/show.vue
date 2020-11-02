<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <greeting :kampus="campus" :asal="from"/>
    <h2>HALLO</h2>
    <hallo :nama="name" :alamat="adress"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import hallo from './components/hallo'
import greeting from './components/greeting'

export default {
  name: 'App',
  data: function(){
    return{
      name:"Nur Arofah",
      adress:"jln kasan bardi no. 24 Desa Wadas ",
      campus:"Universitas Nahdlatul Ulama Yogyakarta",
      from:"Purworejo"
    }
  },
  components: {
    hallo,
    greeting
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
