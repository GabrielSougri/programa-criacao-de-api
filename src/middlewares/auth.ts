import JWT from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { ModelCtor } from "sequelize";

type login = {
    email: string,
    senha: string
}

export default class Auth {
    static generateToken(res: Response, req: Request) {
        const {email, senha} = req.body

        const Email: string = email
        const Senha: string = senha        

        const token = JWT.sign(
            { 
                email: Email, 
                senha: Senha 
            }, process.env.SECRET_KEY as string
        );
        return token
    }

    static async authenticAndGetOne(req: Request, res: Response, model: ModelCtor<any>) {
        if(req.headers.authorization) {
            const [authType, token] = req.headers.authorization.split(' ');

            if(authType === "Bearer" && token) {
                const decoded: login = JWT.verify(token, process.env.SECRET_KEY as string) as login;
                const user = await model.findOne({ where: { email: decoded.email} });

                if(user) {
                    return user
                }
            }
        }
    }

    static routeProtected(req: Request, res: Response, next: NextFunction) {
        let liberado = false;

        if (req.headers.authorization) {
            const [authType, token] = req.headers.authorization;

            if (authType === "Bearer") {
                JWT.verify(token, process.env.SECRET_KEY as string) as login;
                liberado = true;

                if (liberado) {
                    next()
                }
            }
        }
    }
}
