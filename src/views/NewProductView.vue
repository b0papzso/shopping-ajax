<template>
    <h1 class="text-center">Új termék rögzítése</h1>
    <div class="container">
    <form @submit.prevent="bolt.saveProduct(product)" class="form-control">
    <input type="text" class="form-control mb-2" v-model="product.name" placeholder="Termék neve">
    <input type="text" class="form-control mb-2" v-model="product.unit" placeholder="Csomagolási egység">
    <input type="text" class="form-control mb-2" v-model="product.desc" placeholder="Termék leírása">
    <input type="number" class="form-control mb-2" v-model="product.store" placeholder="Raktárkészlet">
    <input type="text" class="form-control mb-2" v-model="product.price" placeholder="Ár">
    <input type="submit" value="Mentés" class="btn btn-success">
</form>
</div>
</template>

<script setup>
import {useBoltStore} from '../stores/counter.js'
import {ref} from 'vue'
const bolt = useBoltStore()
const product = ref({
    "name": "",
    "unit": "",
    "desc": "",
    "store": 0,
    "price": ""
})
</script>