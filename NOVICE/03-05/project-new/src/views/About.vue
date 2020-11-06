<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ $store.state.num }}</h1>
    <v-text-field label="masukkan nama"></v-text-field>
    <v-row>
      <v-col>
        <v-btn @click="tampil">Get User</v-btn>
      </v-col>
    </v-row>

    <v-list>
      <!-- <v-list-item v-for="user in users" :key="user.id" >{{user.name}}</v-list-item> -->
      <v-list-item v-for="user in users" :key="user.id" >{{user.title}}</v-list-item>
      <!-- <v-list-item v-for="user in users" :key="user.id" >{{user.username}}</v-list-item> -->

    </v-list>
    <!-- <v-list>
      <v-list-item v-for="user in users" :key="user.id">{{user.name}}</v-list-item>
    </v-list> -->
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      // nama: [
      //   'arofah','kalila'
      // ],
      users: [],
    };
  },
  methods: {
    tampil: async function () {
      let getUser = await axios.get(
        "http://192.168.1.26:3000/tasks"
      );
      let data = await getUser.data;
      this.users = data;
      console.log(this.users);
    },
  },
  // created: function () {
  //   this.tampil();
  // },
};
</script>
