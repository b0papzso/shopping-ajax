<script setup>
import { useBoltStore } from '@/stores/counter.js';
const boltStore = useBoltStore()
console.log(boltStore.cart)
</script>

<template>
    <h1 class="d-flex justify-content-center">Kosár</h1><br>
    <p v-if="Object.entries(boltStore.cart).length < 1">籃子是空的</p>
    <table v-else>
      <tr v-for="p in boltStore.cart"> 
        <td>{{ p }}</td>
      </tr>
    </table>
  
</template>