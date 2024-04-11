import { Request, Response } from "express";
import { validationResult } from "express-validator"

export default function validationDatas(req: Request){
    const result = validationResult(req)
    
    if(!result.isEmpty()){
        return result.mapped()
    }
}