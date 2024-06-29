<template>
    <main class="categories-page">
        <h1>Categories</h1>
        <div class="categories-list">
            <div class="category" v-for="category in categories" :key="category.id">
                <img :src="category.imageUrl" :alt="category.name">
                <h3>{{ category.name }}</h3>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { categories } from '../mockData';

export default defineComponent({
    name: 'CategoriesPage',
    data() {
        return {
            categories
        };
    }
});
</script>

<style scoped>
.categories-page {
    padding: 20px;
}

.categories-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.category {
    flex: 1 1 calc(33.333% - 20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
}

.category img {
    max-width: 100%;
    height: auto;
}
</style>
