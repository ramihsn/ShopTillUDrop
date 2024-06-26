<template>
    <div class="container">
        <div class="sub-container">
            <h1>Product List</h1>
            <div v-if="loading">Loading...</div>
            <div v-else>
                <div v-for="product in products" :key="product.id" class="product">
                    <img class="product-image" :src="product.imageUrl" :alt="product.name" />
                    <h2>{{ product.name }}</h2>
                    <p>{{ product.description }}</p>
                    <p>${{ product.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
import { fetchProducts } from '../services/productService';

export default {
    data() {
        return {
            products: [],
            loading: true,
        };
    },
    created() {
        fetchProducts().then((data) => {
            this.products = data;
            this.loading = false;
        });
    },
};
</script>

<style>
.container {
    width: 100%;

}

.sub-container {
    margin: 0 auto;
    max-width: 300px;
    text-align: center;
}

.product {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
    text-align: center;
}

.product-image {
    height: auto;
    max-width: 90%;
}
</style>
