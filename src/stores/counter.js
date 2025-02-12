import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Toast, { useToast } from "vue-toastification"
import axios from 'axios'

export const useBoltStore = defineStore('termekek', () => {
  const products = ref([])
  const cart = ref({})
  const toast = useToast()
  const loadAll = () =>{
    fetch("http://localhost:3000/bolt")
    .then(resp => resp.json())
    .then(data => products.value = data)
  }

  const addToCart = (id) =>{
    if(id in cart.value === false)
    {
      cart.value[id] = 1
    }
    else{
      cart.value[id] += 1
    }
    toast("Kosárhoz hozzáadva")
    products.value.find(p => p.id == id).store -= 1
  }

  const removeFromCart = (id) =>{
    console.log(cart.value.find(p=>p.id == id))
    cart.value.splice((cart.value.find(p=>p.id == id)), 1)
  }

  const saveProduct = (product) =>{
    products.value.push(product)
    axios.post("http://localhost:3000/bolt", product)
    .then(() => toast("Sikeres mentés"))
    
    .catch(() => toast.error("Nem jó!"))

  }

  return { products, loadAll, addToCart, cart, removeFromCart, saveProduct }
})
