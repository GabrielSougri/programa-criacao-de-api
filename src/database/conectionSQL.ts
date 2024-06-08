import DBConnection from "./DBConnection";

export default class ConnectionDB extends DBConnection{
    protected static sequelize = super.connectionSQL()
}