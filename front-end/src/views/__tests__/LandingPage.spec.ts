import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import LandingPage from '../LandingPage.vue';
import { promotions, categories } from '@/mockData';

describe('LandingPage.vue', () => {
    it('renders promotions', () => {
        const wrapper = shallowMount(LandingPage);
        const promoElements = wrapper.findAll('.promotion');
        expect(promoElements.length).toBe(promotions.length);
    });

    it('renders categories', () => {
        const wrapper = shallowMount(LandingPage);
        const categoryElements = wrapper.findAll('.category');
        expect(categoryElements.length).toBe(categories.length);
    });
});
