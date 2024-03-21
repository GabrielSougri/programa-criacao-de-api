import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()

export default class DBConnection{
    private static sequelize: Sequelize

    public static connection(): Sequelize{
        this.sequelize = new Sequelize(
            process.env.DATABASE as string,
            process.env.USER as string,
            process.env.PASSWORD as string,
            {
                host: process.env.HOST,
                dialect: process.env.DIALECT as "mysql"
            }
        )

        this.verifConn()

        return this.sequelize
    }

    private static verifConn(){
        try {
            this.sequelize.authenticate()
            console.log("conectado com sucesso")
        } catch (error) {
            console.log(`erro ao se conectar: ${error}`)
        }
    }
}