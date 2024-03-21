import { DataTypes, Sequelize } from "sequelize";
import DBConnection from "../instances/mysql";

export default class model{
    protected static sequelize: Sequelize = DBConnection.connection()

    protected static atribuirId(){
        return {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncremment: true
        }
    }
}