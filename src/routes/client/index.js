import express from "express";
import bannerClientRouter from "./banner.client.js";
import productClientRouter from "./product.client.js";
import colorClientRouter from "./color.client.js";
import sizeClientRouter from "./size.client.js";

const clientRouter = express.Router();

clientRouter.use('/banner', bannerClientRouter);
clientRouter.use('/product', productClientRouter);
clientRouter.use('/color', colorClientRouter);
clientRouter.use('/size', sizeClientRouter);

export default clientRouter