<template>
    <nav class="navbar">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/shop">Shop</router-link></li>
            <li><router-link to="/categories">Categories</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
        <div class="auth-buttons">
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    name: 'NavBar'
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f4f4f4;
}
.navbar ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
}
.navbar ul li a {
    text-decoration: none;
    color: #333;
}
.auth-buttons button {
    margin-left: 10px;
}
</style>
