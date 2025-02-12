<script setup>
import { useBoltStore } from '@/stores/counter.js';
const boltStore = useBoltStore()
console.log(boltStore.cart)
</script>

<template>
    <h1 class="d-flex justify-content-center">Kosár</h1><br>
    <p v-if="Object.entries(boltStore.cart).length < 1">籃子是空的</p>
    <div v-else>
      <table><tr v-for="p in boltStore.cart.keys()"> 
        <td>{{ p }}</td>
      </tr></table>
      <button @click="boltStore.emptyCart()" class="btn btn-outline-danger">Kosár ürítése</button>
    </div>
  
</template>