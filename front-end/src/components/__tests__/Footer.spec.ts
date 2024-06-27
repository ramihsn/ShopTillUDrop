import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Footer from '../Footer.vue';

describe('Footer.vue', () => {
    it('renders footer links', () => {
        const wrapper = shallowMount(Footer);
        expect(wrapper.findAll('a').length).toBe(3); // Adjust according to your footer links
    });

    it('renders copyright text', () => {
        const wrapper = shallowMount(Footer);
        expect(wrapper.text()).toMatch(/Shop Till U Drop/);
    });
});
