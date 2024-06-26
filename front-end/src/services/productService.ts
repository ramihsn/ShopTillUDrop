import { products } from '../mocks/products';

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); // Simulate a network delay
  });
};
