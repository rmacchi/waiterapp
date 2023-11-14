import { Router } from 'express';

import { listCategories } from './App/useCases/categories/listCategories';
import { createCategory } from './App/useCases/categories/createCategory';
import { listProducts } from './App/useCases/products/listProducts';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category

router.post('/categories', createCategory);

// List products

router.get('/products', listProducts);

// Create products

router.post('/products', (req, res) => {
    res.send('OK');
});

// Get products by category

router.get('/categories/:categoryId/products', (req, res) => {
    res.send('OK');
});

// List orders

router.get('/orders', (req, res) => {
    res.send('OK');
});

//Create order

router.post('/orders', (req, res) => {
    res.send('OK');
});

// Change order status

router.patch('/orders/:orderId', (req, res) => {
    res.send('OK');
});

// Delete/cancel order

router.delete('/orders/:orderId', (req, res) => {
    res.send('OK');
});
