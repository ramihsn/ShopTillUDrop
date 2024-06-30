<template>
    <div class="shop-page">
        <div v-for="product in products" :key="product.id" class="product-item">
            <img :src="product.imageUrl" :alt="product.name">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>${{ product.price.toFixed(2) }}</p>
            <button @click="addToCart(product)">Add to Cart</button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { products } from '../mockData';
import type { Product } from '../types';

export default defineComponent({
    name: 'ShopPage',
    data() {
        return {
            products
        };
    },
    methods: {
        addToCart(product: Product) {
            // Add logic to add the product to the cart
            console.log('Adding to cart:', product);
        }
    }
});
</script>

<style scoped>
.shop-page {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
}
.product-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* Align content to the bottom */
    flex: 1 1 250px;
    margin: 10px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    max-width: 250px;
    text-align: center;
}
.product-item img {
    align-self: center;
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: auto; /* Push the image to the top */
}
.product-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.product-item h3 {
    margin: 10px 0;
}
.product-item p {
    margin: 5px 0;
}
button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
}
button:hover {
    background-color: #45a049;
}
</style>
