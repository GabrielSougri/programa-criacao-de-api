import DBConnection from "./DBConnection";
import dotenv from "dotenv"

dotenv.config()

export default class connectionNOSQL extends DBConnection{
    static connNosql(){
        if(process.env.URL as string){
            super.connectionNOSQL()
        }else{
            console.log("url vazia")
        }
    }
}