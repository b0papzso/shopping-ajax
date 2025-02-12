<script setup>
import { useBoltStore } from '@/stores/counter';
const boltStore = useBoltStore()
</script>

<template>
  <h1 class="d-flex justify-content-center">Termékek</h1><br>
  
<div class="d-flex flex-wrap justify-content-center">
  
  <div v-for="item in boltStore.products" >
    <div class="card mt-3" style="width: 17rem; height: 250px;">
      <div class="card-body">
    <h3 class="card-title text-center" >{{ item.name}}</h3>
    <p class="card-text">{{ item.desc }}</p>  
    <p class="card-text">Ára: {{ item.price }} / {{ item.unit }}</p>
    <div class="card-footer text-center">
    <button  :disabled="!item.store" class="btn btn-outline-primary w-50" v-on:click="boltStore.addToCart(item.id)">&#128722;</button>
</div>
  </div>
</div>
</div>
  </div>
  
</template>