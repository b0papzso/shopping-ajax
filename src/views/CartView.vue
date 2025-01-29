<script setup>
import { useBoltStore } from '@/stores/counter';
const boltStore = useBoltStore()
</script>

<template>
    <h1 class="d-flex justify-content-center">Kosár</h1><br>
<div class="d-flex flex-wrap justify-content-center"> 
  <div v-for="item in boltStore.cart" >
    <div class="card mt-3" style="width: 17rem; height: 250px;">
      <div class="card-body">
    <h3 class="card-title text-center" >{{ item.name}}</h3>
    <p class="card-text">{{ item.desc }}</p>  
    <p class="card-text">Ára: {{ item.price }} / {{ item.unit }}</p>
  </div>
</div>
</div>
  </div>
  
</template>