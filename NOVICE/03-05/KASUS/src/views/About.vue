<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2>ADD FRUIT</h2>
    <input v-model="newFruit" type="text" placeholder="masukkan buah">
    <button @click="addFruit">ADD</button>

    <h2> MANY FRUIT</h2>
    <ul v-for="(fruit,index) in fruits" :key="index">
      <li>{{fruit}}
        <input v-if="editIndex === index" v-model="editInput" type="text">
        <button @click="delFruit(index)">delete</button>
        <button @click="saveEdit(index)" v-if="editIndex === index">save</button>
        <button v-if="editIndex !== index" @click="editFruit(index)">edit</button>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  data: function(){
    return{
      fruits:['semangka','melon','pepaya'],
      newFruit:'',
      editInput:'',
      editIndex: true

    }
  },
  methods:{
    addFruit: function(){
      this.fruits.push(this.newFruit);
     },
    delFruit: function(index){
    this.fruits.splice(index,1);
    },
    editFruit: function(index){
      this.editIndex = index;
      this.editInput = this.fruits[index];
    },
    saveEdit: function(index){
      this.fruits[index] = this.editInput;
      console.log(this.fruits);
      this.editIndex = true;
    }
   }
}
</script>


