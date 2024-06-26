import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductList from '../ProductList.vue'
import { fetchProducts } from '../../services/productService'

// Mock the fetchProducts service
vi.mock('../../services/productService', () => ({
    fetchProducts: vi.fn(),
}))

describe('ProductList', () => {
    it('renders product list correctly', async () => {
        // Arrange
        const mockProducts = [
            {
                id: 1,
                name: 'Product 1',
                description: 'Description for product 1',
                price: 100,
                imageUrl: '/images/product1.jpg',
            },
            {
                id: 2,
                name: 'Product 2',
                description: 'Description for product 2',
                price: 200,
                imageUrl: '/images/product2.jpg',
            },
        ]

        // Mock the fetchProducts function to return mock data
        fetchProducts.mockResolvedValue(mockProducts)

        // Act
        const wrapper = mount(ProductList)

        // Wait for the component to re-render after fetching data
        await flushPromises()

        // Assert
        const products = wrapper.findAll('.product')
        expect(products.length).toBe(mockProducts.length)

        // Check that each product is rendered correctly
        products.forEach((productWrapper, index) => {
            const product = mockProducts[index]
            expect(productWrapper.text()).toContain(product.name)
            expect(productWrapper.text()).toContain(product.description)
            expect(productWrapper.text()).toContain(`$${product.price}`)
        })
    })

    it('displays loading state initially', () => {
        // Arrange
        fetchProducts.mockResolvedValue([])

        // Act
        const wrapper = mount(ProductList)

        // Assert
        expect(wrapper.text()).toContain('Loading...')
    })
})

// Utility function to wait for all promises to resolve
async function flushPromises() {
    return new Promise(setImmediate)
}
