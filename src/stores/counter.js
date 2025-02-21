import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Toast, { useToast } from "vue-toastification"
import axios from 'axios'

export const useBoltStore = defineStore('termekek', () => {
  const products = ref([])
  const cart = ref({})
  const toast = useToast()
  const total = ref(0)
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

  const emptyCart = () =>{
    for (const key in cart.value) {
      products.value.find(p => p.id == key).store += cart.value[key]
    }
    cart.value = {}
    toast.error("Kosár ürítve!")
  }

  const countTotal = () =>{
    let t = 0
    for (const key in cart.value) {
      t += parseFloat(products.value.find(p => p.id == key).price) * cart.value[key]
    }
    return t
  }

  const deleteProduct = (id) =>{
    products.value.find(p => p.id == id).store += cart.value[id]
    delete cart.value[id]
    toast.success("Termék kosárból törölve!")
  }

  const modifyQuantity = (id, direction) => {
    if (direction === '+') {
      addToCart(id)
    }
    else {
      cart.value[id] -= 1
      products.value.find((p) => p.id == id).store++
      if (cart.value[id] === 0) {
        deleteProduct(id)
      } else {
        toast.warning("Mennyiség módosítva!")
      }
    }
  }

  return {  deleteProduct, modifyQuantity, countTotal, emptyCart, products, loadAll, addToCart, cart, removeFromCart, saveProduct }
})
