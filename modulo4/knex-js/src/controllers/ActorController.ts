import {Request, Response} from 'express'

import connection from '../connect'

const getActorById = async (id: string):Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actors WHERE id = '${id}'
  `)
  console.log(result[0][0])
	return result[0][0]
}
export const ActorController = {
    

    index: async (req: Request, res: Response): Promise<any> => {
       
        res.send("funcionando")
           
    },
    show: async (req: Request, res: Response):Promise<void> => {
        
        try{
            const name = req.params.name
            const result = await connection.raw(`SELECT * FROM Actor WHERE name = ${name}`);
            res.status(200).send({ message: result[0] });

        }catch(err:any){
            console.log(err.message)
            res.status(500).send("Unexpected error");
        }    
    },
    store: async (id: string,name: string,salary: number,dateOfBirth: Date,gender: string): Promise<void> => {
        await connection
        .insert({id: id,name: name,salary: salary,birth_date: dateOfBirth,gender: gender})
        .into("Actor")

    }
}
