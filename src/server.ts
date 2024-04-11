import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { Request, Response } from "express"

dotenv.config()

const server = express()

server.use(express.urlencoded({extended: true}))
server.use(cors())

server.get("/", (req: Request, res: Response) => {
    res.json("Hello World!!")
})

/*server.listen(process.env.PORT)*/

export default server