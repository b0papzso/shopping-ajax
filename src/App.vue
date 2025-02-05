<script setup>
  import axios from "axios";
  import {ref, onMounted} from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import { useBoltStore } from "./stores/counter.js";

const boltStore = useBoltStore()

  onMounted(() =>{
    boltStore.loadAll()
  })
</script>

<template>
  <nav>
        <RouterLink to="/" class="btn btn-outline-success m-2">Termékek</RouterLink>
        <RouterLink to="/cart" class="btn btn-outline-success m-2">Kosár</RouterLink>
        <RouterLink to="/new" class="btn btn-outline-success m-2">Új termék hozzáadása</RouterLink>
      </nav>
  <RouterView />
</template>
