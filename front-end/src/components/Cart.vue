<template>
    <div>
        <h2>Cart</h2>
        <div v-for="item in cartItems" :key="item.id">
            <h3>{{ item.name }}</h3>
            <p>{{ item.price }} x {{ item.quantity }}</p>
        </div>
        <p>Total: {{ cartTotal }}</p>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'Cart',
    setup() {
        const store = useStore();

        const cartItems = store.getters.cartItems;
        const cartTotal = store.getters.cartTotal;

        return {
            cartItems,
            cartTotal,
        };
    },
});
</script>

<style scoped>
/* Add your styles here */
</style>
