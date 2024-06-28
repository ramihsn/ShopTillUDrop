import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import ShopPage from '../ShopPage.vue';
import { products } from '@/mockData';

describe('ShopPage.vue', () => {
    it('renders a list of products', () => {
        const wrapper = shallowMount(ShopPage);
        const productItems = wrapper.findAll('.product-item');
        expect(productItems.length).toBe(products.length);
    });

    it('renders product details correctly', () => {
        const wrapper = shallowMount(ShopPage);
        const firstProduct = products[0];
        const firstProductItem = wrapper.find('.product-item');

        expect(firstProductItem.text()).toContain(firstProduct.name);
        expect(firstProductItem.text()).toContain(firstProduct.description);
        expect(firstProductItem.text()).toContain(firstProduct.price.toFixed(2));
    });

    it('calls addToCart method when button is clicked', async () => {
        const addToCart = vi.spyOn(ShopPage.methods, 'addToCart');
        const wrapper = shallowMount(ShopPage);
        const firstProductButton = wrapper.find('.product-item button');

        await firstProductButton.trigger('click');
        expect(addToCart).toHaveBeenCalled();
    });
});
