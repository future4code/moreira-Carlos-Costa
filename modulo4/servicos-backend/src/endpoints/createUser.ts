import {Request, Response} from "express"
import {getAddressInfo} from "../services/getAddressInfo"
import { connection } from "../data/connection"

export const createUser = async(req:Request, res:Response) => {
    try {
        const {cep, numero, complemento} = req.body
        
        const address = await getAddressInfo(cep)

        await connection("endereco")
        .insert({
            id: Date.now().toString(),
            cep,
            logradouro: address?.logradouro,
            numero,
            complemento,
            bairro: address?.bairro,
            cidade: address?.cidade,
            estado: address?.estado
        })

       
        if(!address){
            throw new Error("ERRO!")
        }

        res.status(201).send({ message: "Endereço criado!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}