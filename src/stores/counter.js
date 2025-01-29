import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBoltStore = defineStore('termekek', () => {
  const products = ref(0)
  const cart = ref()
  const loadAll = () =>{
    fetch("http://localhost:3000/bolt")
    .then(resp => resp.json())
    .then(data => products.value = data)
  }

  return { products, loadAll }
})
