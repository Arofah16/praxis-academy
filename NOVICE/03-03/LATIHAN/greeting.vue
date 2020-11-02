<template>
    <div class="div">
        <h2>selamat Arofah</h2>
        <h3>{{kampus}}</h3>
        <h3>{{kotaAsal}}</h3>
    </div>
</template>
<script>
export default {
    props:['kampus','kotaAsal']
    
}
</script>
<style>
h2{
    border : 1 px solid black
    background-color green;
    color: #000;
}
.div{
    border: 1 px solid;
    width: 200 px;
    height: 200 px;
}

</style>