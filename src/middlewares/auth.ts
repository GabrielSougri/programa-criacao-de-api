import JWT from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"
import { login } from "../types/loginType"
import dotenv from "dotenv"
import { ModelCtor } from "sequelize"

dotenv.config()

export default class Auth{
    private static liberate = false

    protected static generateToken(login: login){
        const token = JWT.sign({email: login.email, senha: login.senha}, process.env.SECRET_KEY as string)
        return token
    }

    protected static async authenticAndGetOne(req: Request, model: ModelCtor<any>){
        if(req.headers.authorization){
            const [authType, token] = req.headers.authorization

            if(authType === "Bearer"){
                const decoded: login = JWT.verify(token, process.env.SECRET_KEY as string) as login

                const user = await model.findOne({where: {email: decoded.email, senha: decoded.senha}})
                this.liberate = true

                if(this.liberate){
                    return user
                }
            }   
        }
    }

    public static routeProtected(req: Request, res: Response, next: NextFunction){
        if(req.headers.authorization){
            const [authType, token] = req.headers.authorization

            if(authType === "Bearer"){
                JWT.verify(token, process.env.SECRET_KEY as string) as login
                this.liberate = true

                if(this.liberate){
                    next()
                }
            }   
        }
    }
}