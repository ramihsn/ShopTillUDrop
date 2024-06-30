import { defineStore } from 'pinia'
import { fetchProducts } from '@/services/productService'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    loading: true
  }),
  actions: {
    async fetchProducts() {
      this.loading = true
      const data = await fetchProducts()
      this.products = data
      this.loading = false
    }
  }
})
