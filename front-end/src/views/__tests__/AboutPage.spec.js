import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import AboutPage from '../AboutPage.vue';

describe('AboutPage.vue', () => {
    it('renders about page content', () => {
        const wrapper = shallowMount(AboutPage);
        expect(wrapper.text()).toContain('About Us');
        expect(wrapper.text()).toContain('Welcome to Shop Till U Drop!');
        expect(wrapper.text()).toContain('Founded in 2024');
    });
});
