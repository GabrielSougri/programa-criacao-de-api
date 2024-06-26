import { Sequelize } from "sequelize";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export default class DBConnection{
    private static database = process.env.DATABASE as string
    private static user = process.env.USER as string
    private static password = process.env.PASSWORD as string
    private static host = process.env.HOST as string
    private static dialect = process.env.DIALECT as 'mysql'
    private static url = process.env.URL as string

    protected static connectionSQL(){
        const sequelize = new Sequelize(this.database,this.user,this.password, 
            {
                host: this.host,
                dialect: this.dialect 
            }
        )

        try {
            sequelize.authenticate()
            console.log("conectado com sucesso")
        } catch (error) {
            console.log(`erro ao se conectar: ${error}`)
        }
            
        return sequelize
    }

    public static async connectionNOSQL(){
        try {
            await mongoose.connect(this.url)
            console.log("conectado com sucesso ao mongodb")
        } catch (error) {
            console.log(`erro ao se conectar: ${error}`)
        }
    }
}
