import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import ContactPage from '@/views/ContactPage.vue';

describe('ContactPage.vue', () => {
    it('renders contact form', () => {
        const wrapper = shallowMount(ContactPage);
        expect(wrapper.find('h1').text()).toBe('Contact Us');
        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('input#name').exists()).toBe(true);
        expect(wrapper.find('input#email').exists()).toBe(true);
        expect(wrapper.find('textarea#message').exists()).toBe(true);
    });

    it('submits form successfully', async () => {
        const wrapper = shallowMount(ContactPage);
        const form = wrapper.vm.form;

        form.name = 'John Doe';
        form.email = 'john.doe@example.com';
        form.message = 'Hello!';

        await wrapper.find('form').trigger('submit.prevent');
        // Check for form submission handling logic here
    });
});
