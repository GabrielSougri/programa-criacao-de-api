import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectionNOSQL from "./database/conectionNOSQL"

dotenv.config()

const server = express()

/*connectionNOSQL.connNosql()*/ 

server.use(express.urlencoded({extended: true}))
server.use(cors())

server.listen(process.env.PORT, () => console.log("servidor iniciado"))  