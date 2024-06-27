<template>
    <nav class="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
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
