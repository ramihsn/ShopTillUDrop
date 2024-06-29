import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import ShopPage from '../ShopPage.vue';

describe('ShopPage.vue', () => {
  it('calls addToCart method when button is clicked', async () => {
    const wrapper = shallowMount(ShopPage);
    const addToCartSpy = vi.spyOn(wrapper.vm, 'addToCart');

    // Find the button and trigger a click event
    const addToCartButton = wrapper.find('.product-item button');
    if (addToCartButton.exists()) {
      await addToCartButton.trigger('click');
    }

    // Assert that addToCart was called
    expect(addToCartSpy).toHaveBeenCalled();
  });
});
