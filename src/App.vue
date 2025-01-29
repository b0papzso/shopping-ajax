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
        <RouterLink to="/">Termékek</RouterLink>&nbsp;&nbsp;
        <RouterLink to="/cart">Kosár</RouterLink>
      </nav>
  <RouterView />
</template>
