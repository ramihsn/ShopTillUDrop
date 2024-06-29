import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CategoriesPage from '@/views/CategoriesPage.vue';
import { categories } from '@/mockData';

describe('CategoriesPage.vue', () => {
    it('renders the correct number of categories', () => {
        const wrapper = shallowMount(CategoriesPage);
        expect(wrapper.findAll('.category').length).toBe(categories.length);
    });

    it('renders category details correctly', () => {
        const wrapper = shallowMount(CategoriesPage);
        const categoryElements = wrapper.findAll('.category');

        categories.forEach((category, index) => {
            const categoryElement = categoryElements.at(index);
            expect(categoryElement.find('h3').text()).toBe(category.name);
            expect(categoryElement.find('img').attributes('src')).toBe(category.imageUrl);
            expect(categoryElement.find('img').attributes('alt')).toBe(category.name);
        });
    });
});
