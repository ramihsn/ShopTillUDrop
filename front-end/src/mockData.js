// import { Product } from "./types";
/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {string} imageUrl
 */

/**
 * @template T
 * @param {T[]} items
 * @param {number} factor
 * @returns {T[]}
 */
export function multiplyItems(items, factor) {
    const multipliedItems = [];
    for (let i = 1; i <= factor; i++) {
        for (const item of items) {
            if (item.name === undefined) {
                multipliedItems.push({
                    ...item,
                    id: item.id + i * items.length, // Ensure unique IDs
                    description: `${item.description} (Copy ${i})` // Optionally, make the names unique
                });
            } else {
                multipliedItems.push({
                    ...item,
                    id: item.id + i * items.length, // Ensure unique IDs
                    name: `${item.name} (Copy ${i})` // Optionally, make the names unique
                });
            }
        }
    }
    return multipliedItems;
}

const _promotions = [
    {
        id: 1,
        title: "Summer Sale",
        description: "Up to 50% off on selected items",
        imageUrl: "https://www.madinatzayed-mall.com/media/2794/madinatmall_summer-sale-600x480.png?anchor=center&mode=crop&width=600&height=480&rnd=133015844480000000"
    },
    {
        id: 2,
        title: "New Arrivals",
        description: "Check out the latest trends",
        imageUrl: "https://thumbs.dreamstime.com/b/vector-illustration-cool-new-arrival-sticker-tag-banner-megaphone-vector-illustration-new-arrival-sticker-tag-banner-169160809.jpg"
    },
    {
        id: 3,
        title: "Flash Deals",
        description: "Limited time offers",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/006/921/876/non_2x/flash-deal-banner-flat-design-illustration-vector.jpg"
    },
];

const _categories = [
    {
        id: 1,
        name: "Electronics",
        imageUrl: "https://globerec.com/wp-content/uploads/2022/10/consumer.jpeg"
    },
    {
        id: 2,
        name: "Fashion",
        imageUrl: "https://images.ctfassets.net/isq5xwjfoz2m/1l8cWrGEGNWw1LzmxeNOqg/b14a2391ec218d5d30a72ff4816dbdcc/AdobeStock_544567228__1___1_.jpeg?w=1980&h=804&fl=progressive&q=80&fm=jpg"
    },
    {
        id: 3,
        name: "Home & Kitchen",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCLaD-fiKaeBXC2XkTJVVyvtE9Epd8NrwcQ&s"
    }
    // Add more categories as needed
];

/** @type {Product[]} */
const _products = [
    {
        id: 1,
        name: 'Noise Cancelling Headphones',
        description: 'Experience immersive sound with our top-of-the-line noise cancelling headphones.',
        price: 199.99,
        imageUrl: 'https://cdn.specialneedstoys.com/products/images/xl/5BZEM.jpg'
    },
    {
        id: 2,
        name: 'Smartwatch Series 6',
        description: 'Stay connected and track your health with the latest Smartwatch Series 6.',
        price: 399.99,
        imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
    },
    {
        id: 3,
        name: '4K Ultra HD Smart TV',
        description: 'Enjoy stunning visuals with our 55-inch 4K Ultra HD Smart TV, perfect for your living room.',
        price: 599.99,
        imageUrl: 'https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/de0d3686-4766-11ee-8cfb-8ee861fd9236.jpg'
    },
];

export const promotions = multiplyItems(_promotions, 5);
export const categories = multiplyItems(_categories, 5);
export const products = multiplyItems(_products, 5);
