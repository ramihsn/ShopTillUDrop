<template>
    <div class="contact-page">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="form.name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" required>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="form.message" required></textarea>
            </div>
            <button type="submit" class="submit-button">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    name: 'ContactPage',
    setup() {
        const form = reactive({
            name: '',
            email: '',
            message: ''
        });

        const submitForm = () => {
            console.log('Form submitted:', form);
            alert('Form submitted successfully!');
        };

        return {
            form,
            submitForm
        };
    }
});
</script>

<style scoped>
.contact-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.contact-page h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

.contact-page p {
    font-size: 1.2em;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1em;
}

.form-group textarea {
    resize: vertical;
    height: 100px;
}

.submit-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
}

.submit-button:hover {
    background-color: #45a049;
}
</style>
