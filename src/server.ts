import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const server = express()
 
server.use(cors())
server.use(express.urlencoded({extended: true}))

server.listen(process.env.PORT)
