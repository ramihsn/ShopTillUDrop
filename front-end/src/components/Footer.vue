<template>
    <footer class="footer">
        <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
        <p>&copy; 2024 Shop Till U Drop. All rights reserved.</p>
    </footer>
</template>

<script lang="ts">
export default {
    name: 'Footer'
};
</script>

<style scoped>
.footer {
    padding: 20px;
    background-color: #f4f4f4;
    text-align: center;
}
.footer ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 0;
}
.footer ul li a {
    text-decoration: none;
    color: #333;
}
</style>
