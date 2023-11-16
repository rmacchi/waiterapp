import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './App/useCases/categories/listCategories';
import { createCategory } from './App/useCases/categories/createCategory';
import { listProducts } from './App/useCases/products/listProducts';
import { createProduct } from './App/useCases/products/createProducts';
import { listProductByCategory } from './App/useCases/categories/listProductByCategory';
import { listOrders } from './App/useCases/orders/listOrders';
import { createOrder } from './App/useCases/orders/createOrder';
import { changeOrderStatus } from './App/useCases/orders/changeOrderStatus';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    })
});

// List categories
router.get('/categories', listCategories);

// Create category

router.post('/categories', createCategory);

// List products

router.get('/products', listProducts);

// Create products

router.post('/products', upload.single('image'), createProduct);

// Get products by category

router.get('/categories/:categoryId/products', listProductByCategory);

// List orders

router.get('/orders', listOrders);

//Create order

router.post('/orders', createOrder);

// Change order status

router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order

router.delete('/orders/:orderId', (req, res) => {
    res.send('OK');
});
