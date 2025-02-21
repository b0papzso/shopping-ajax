<script setup>
import { useBoltStore } from '@/stores/counter.js';
const boltStore = useBoltStore()
</script>

<template>
    <h1 class="d-flex justify-content-center">Kosár</h1><br>
    <p v-if="Object.entries(boltStore.cart).length < 1">籃子是空的</p>
    <div v-else>
      <table class="table table-striped col-md-9">
        <thead>
        <th>Termék</th>
        <th>Mennyiség</th>
        <th>Ár</th>
        <th>Összesen</th>
      </thead>
      <tbody>
        <tr v-for="(v, k) in boltStore.cart"> 
        <td>{{ boltStore.products.find(p => p.id == k).name}}: </td>
        <td>{{ v }} db</td>
        <td>{{ boltStore.products.find(p => p.id == k).price }} / db</td>
        <td>{{ v * parseFloat(boltStore.products.find(p => p.id == k).price) }} Ft</td>
        <td><span @click="botStore.modifyQuantity(k, '-')" class="btn btn-secondary">-</span> <span class="p-3">{{ v }} </span><span @click="botStore.modifyQuantity(k, '+')" class="btn btn-secondary">+</span></td>
        <td><span @click="boltStore.deleteProduct(k)" class="btn btn-danger">&#x1F5D1;</span></td>
      </tr>
      <tr class="fs-5" colspan="4"><strong>Végösszeg:</strong><td>{{ boltStore.countTotal() }} Ft</td></tr>
    </tbody>
    </table>
      <button @click="boltStore.emptyCart()" class="btn btn-outline-danger">Kosár ürítése</button>
    </div>
  
</template>