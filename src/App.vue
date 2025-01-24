<script setup>
  import axios from "axios";
  import {ref, onMounted} from 'vue'
  const shoppingList = ref([])

  onMounted(() =>{
    axios.get("http://localhost:3000/shoppinglist")
    .then(resp => {
      console.log(resp.data)
      shoppingList.value = resp.data
  })
  })
</script>

<template>
  <h1 class="text-center">Bevásárlólista</h1>  
  <div class="d-flex container">
  <div v-for="item in shoppingList" class="d-flex flex-column container justify-content-between">
    <div class="card mt-3" style="width: 18rem;">
      <div class="card-body">
    <h5 class="card-title">{{ item.id }}</h5>
    <p class="card-text" >Tárgy: {{ item.item}}</p>
    <p class="card-text">Kiszerelés: {{ item.packaging }}</p>  </div>
</div>
</div>
  </div>
</template>
