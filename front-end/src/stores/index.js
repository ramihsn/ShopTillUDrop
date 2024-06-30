// src/stores/index.ts
import { defineStore } from 'pinia'
import type { Product } from '@/types'
import { fetchProducts } from '@/services/productService'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
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
