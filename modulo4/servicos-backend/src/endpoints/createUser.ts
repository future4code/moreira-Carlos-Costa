import {Request, Response} from "express"
import {getAddressInfo} from "../services/getAddressInfo"
export const createUser = async(req:Request, res:Response) => {
    try {
        const {zipcode} = req.body
        const address = await getAddressInfo(zipcode)
        if(!address){
            throw new Error("Could not get address")
        }
        res.send(address)
    }
    catch(error) {
        res.send({message: "Unexpected error"})
    }
}
