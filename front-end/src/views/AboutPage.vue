<template>
    <div class="about-page">
        <h1>About Us</h1>
        <p>Welcome to Shop Till U Drop! We are dedicated to providing the best online shopping experience. Our mission is to offer a wide variety of products at competitive prices, all while delivering excellent customer service.</p>
        <p>Founded in 2024, Shop Till U Drop has quickly become a favorite destination for shoppers worldwide. Our team is passionate about sourcing high-quality products and ensuring that every customer has a seamless shopping experience.</p>
        <p>Thank you for choosing Shop Till U Drop. Happy shopping!</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutPage'
});
</script>

<style scoped>
.about-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.about-page h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
}

.about-page p {
    font-size: 1.2em;
    margin-bottom: 15px;
}
</style>
