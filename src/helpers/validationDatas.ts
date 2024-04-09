import { Request, Response } from "express";
import { validationResult } from "express-validator"

export default function validationDatas(req: Request, res: Response){
    const result = validationResult(req)
    
    if(!result.isEmpty()){
        res.json(result.mapped())
    }
}