import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import rota from "./routes/route"

dotenv.config()

const server = express()

server.use(rota)
server.use(cors())
server.use(express.urlencoded({extended: true}))

server.listen(process.env.PORT)
