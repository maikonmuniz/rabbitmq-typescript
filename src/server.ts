import express from "express";
import { RabbitMQConn } from "./RabbitMQConn";
import { Router, Request, Response } from "express"

require("dotenv").config();
const app = express();


app.use(express.json());
const router = Router();

app.use("/teste", router);

const procucer = new RabbitMQConn();

router.post('/pedidos', async (req: Request,res: Response) => {
    procucer.sendMessage(req.body);
    res.status(200).json({foi: 'foi'})
})

app.listen(4003, async () => console.log("Server is running on PORT 4003"));
