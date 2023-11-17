import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function deleteProducts(req: Request, res: Response) {
    try {
        const { orderId } = req.params;

        await Product.findByIdAndDelete(orderId);

        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
