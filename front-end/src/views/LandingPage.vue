<template>
    <main class="landing-page">
        <div class="banner">
            <h1>Shop Till U Drop</h1>
            <p>Your one-stop shop for everything!</p>
        </div>
        <div class="promotions">
            <h2>Promotions</h2>
            <div class="promotion" v-for="promo in promotions" :key="promo.id">
                <img :src="promo.imageUrl" :alt="promo.title">
                <h3>{{ promo.title }}</h3>
                <p>{{ promo.description }}</p>
            </div>
        </div>
        <div class="categories">
            <h2>Categories</h2>
            <div class="category" v-for="category in categories" :key="category.id">
                <img :src="category.imageUrl" :alt="category.name">
                <h3>{{ category.name }}</h3>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { promotions, categories } from '../mockData';

export default defineComponent({
    name: 'LandingPage',
    data() {
        return {
            promotions,
            categories
        };
    }
});
</script>

<style scoped>
.landing-page {
    text-align: center;
}
.banner {
    padding: 20px;
    background-color: #f4f4f4;
}
.promotions, .categories {
    margin: 20px 0;
}
.promotion, .category {
    display: inline-block;
    width: 200px;
    margin: 10px;
}
.promotion img, .category img {
    width: 100%;
    height: auto;
}

@media (max-width: 768px) {
    .promotion, .category {
        width: 100%;
    }
}
</style>