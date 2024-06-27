import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import NavBar from '../NavBar.vue';

describe('NavBar.vue', () => {
    it('renders navigation links', () => {
        const wrapper = shallowMount(NavBar);
        expect(wrapper.findAll('a').length).toBe(5); // Adjust according to your nav links
    });
});
