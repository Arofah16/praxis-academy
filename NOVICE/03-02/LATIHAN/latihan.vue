1.blok komponen
<template>
    <div class="app">
      <h1>HARI PERTAMA PENGENALAN VUE</h1>

      <h2> Belajar state </h2>
      <!-- <h3>{{buku}}</h3> -->
      <!-- <button v-on:click="display">Ganti</button> -->
       <h1>{{nomer}}</h1>
       <button @click="display">PLUS</button>
       <button @click="tampilkan">MINUS</button>
      <!-- <h3>{{baju}}</h3>
      <p>botol berwarna {{botol.warna}} ,dengan ukuran {{botol.ukuran}} seharga {{botol.harga}}</p>
      <p>{{laptops}}</p>
      <h3>daftar nmerk laptop</h3>
      <ol>
        <li  v-for="laptop in laptops" :key="laptop">{{laptop}}</li>  
      </ol> -->
    </div>
</template>

<script>
inport foto from "@/components/foto"; 
export default {            
    data: function(){               //state digunakan untuk menampilkan data secara dinamis
        return{
            buku: "buku tulis",  
            nomer:0,                    //dipanggil keynya
            baju: "atasan",
            botol:{
              warna:"HIJAU",
              ukuran:"medium",
              harga: 75000
            },
            laptops:["acer","asus","aple","lenovo"]          //laptop dibawah dirender kesini dengan laptop
        }
    },
methods: {                                    //metode yang digunakan untuk menyimpan suatu fungsi
  display: function(){                        //membuat fungsi
    this.nomer += 1 ;
  
  },
  tampilkan: function(){
    this.nomer -= 1;
  
}
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
  border: 20 px;
}
</style>
