<script setup>
import { useBoltStore } from '@/stores/counter';
const boltStore = useBoltStore()
</script>

<template>
<div class="d-flex flex-wrap justify-content-center">
  <div v-for="item in boltStore.products" >
    <div class="card mt-3" style="width: 18rem; height: 250px;">
      <div class="card-body">
    <h5 class="card-title">{{ item.id }}</h5>
    <p class="card-text" >Tárgy: {{ item.name}}</p>
    <p class="card-text">&emsp;{{ item.desc }}</p>  
    <p class="card-text">Ára: {{ item.price }} / {{ item.unit }}</p>
    <button class="btn btn-outline-primary">&#128722;</button>
  </div>
</div>
</div>
  </div>
  
</template>