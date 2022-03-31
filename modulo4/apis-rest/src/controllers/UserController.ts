import {Request, Response} from 'express'
import {users, User} from '../DataUsers'

export const userController = {

    index: (req: Request, res: Response) => {
        const result = users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            type: user.type,
            age: user.age
          }))
    
        res.status(200).send(result)
    },

    show: (req: Request, res: Response) => {
        let errorCode: number = 400;
        let result: User[] = users;
        try {
          if (!req.query.type) {
            errorCode = 404;
            throw new Error("User not found");
          }

          if (req.query.type) {
            result = result.filter((user) =>
              user.type.includes(req.query.type as string)
            );
          }

          res.status(200).send(result);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
    },
    
    update: (req: Request, res: Response) => {
        let errorCode = 500.
        try {
            const { id, name, email, type, age } = req.body;
            if (!name || !email || !type || !age) {
                errorCode = 422;
                throw new Error("Erro na requisição: faltando propriedades no body (name, email, type, age).")
            }
            if (isNaN(Number(age))) {
                errorCode = 422;
                throw new Error("Erro na requisição: verifique o campo 'age' está como number.")
            }
            if (type.toUpperCase() !== "ADMIN" && type.toUpperCase() !== "NORMAL") {
                errorCode = 422;
                throw new Error("Erro na requisição: insira um type válido.")
            }
            users.push({ id: users.length +1, name, email, type, age});
            res.status(200).send(users);
        } catch (err: any) {
            res.status(errorCode).send({ message: err.message || "Erro interno. Aguarde um momento e tente novamente." });
        }
    },
    showName: (req: Request, res: Response) => {
    let errorCode: number = 400;
    let result: User[] = users
    try {
        if (!req.query.name) {
            errorCode = 404
            throw new Error("User not found");
          }
  
          if (req.query.name) {
              result = result.filter(
                  user => user.name.includes(req.query.name as string)
              )
          }

      res.status(200).send(result);

    } catch (error: any) {
        res.status(400).send(error.message);
  }
}
}