import { Router, Request, Response } from "express";
import productRouter from "./features/product/product.routes";

const router = Router() 

router.get("/", (
    req: Request, 
    res : Response
) => {
    res.status(200).json({
        message: "Service Running Ok", 
        status: true, 
        statusCode: 200, 
        data : []
    })
});

router.use(productRouter);

export default router