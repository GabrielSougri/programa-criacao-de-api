import { DataTypes, Sequelize } from "sequelize";
import DBConnection from "../instances/mysql";

export default class model{
    protected static sequelize: Sequelize = DBConnection.connection()

    protected static attrId(){
        return {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncremment: true
        }
    }

    protected static attrEmail(){
        return {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

    protected static attrSenha(){
        return {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
}