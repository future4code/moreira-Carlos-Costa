import {Request, Response} from 'express'
import {users, User} from '../data'

export const userController = {

    store: (req: Request, res: Response) => {
        
        let codigoErro = 400
        try {
        
            const { nome, cpf, dataDeNascimento } = req.body
            const stringCPF: string = cpf.split(".").join("").split("-").join("");
        
            function formatarData(data: string) {
                let dia: string = ""
                let mes: string = ""
                let ano: string = ""
                for (let i = 0; i < data.length; i++) {
                    if (i < 2) {
                        dia += data[i]
                    }
                    if (i > 2 && i < 5) {
                        mes += data[i]
                    }
                    if (i > 5 && i < 10) {
                        ano += data[i]
                    }
                }
                return (`${ano}/${mes}/${dia}`)
            }
        
        
            if (!nome || !cpf || !dataDeNascimento) {
                codigoErro = 422
                throw new Error("Por gentileza, verifique os campos de entrada para criação da conta.")
            }
        
            let idadeUsuario = (Date.now() - new Date(formatarData(dataDeNascimento)).getTime()) / 3.1568 * (Math.pow(10, -10))
        
            if (idadeUsuario < 18) {
                codigoErro = 422
                throw new Error("Para abertura de uma conta você deve ter mais que 18 anos.")
            }
        
            const novoUsuario: User = {
                nome,
                cpf,
                dataDeNascimento,
                saldo: 0,
                extratoDados: []
            }
            if (stringCPF.length !== 11 || isNaN(Number(stringCPF))) {
                codigoErro = 422
                throw new Error("O CPF para criação está incorreto. Por gentileza, verifique se há onze digitos e todos são números")
            }
        
            for (let i = 0; i < users.length; i++) {
                if (users[i].cpf === cpf) {
                    codigoErro = 409
                    throw new Error("Não foi possível realizar o seu cadastro. Um usuário já possui o CPF informado.")
                }
            }
        
            users.push(novoUsuario)
            res.status(201).send("Usuario criado com suceso!")
        
        } catch (err: any) {
            res.status(codigoErro).send(err.message)
        }
    },
    index: (req: Request, res: Response) => {
        
        let codigoErro = 500
        try {
            if (!users) {
                throw new Error("Erro na requisição. Por gentileza, tente novamente mais tarde.")
            }
            res.status(200).send(users)
        } catch (err: any) {
            res.status(codigoErro).send(err.message)
        }
    },
    show: (req: Request, res: Response) => {
        let codigoErro = 500
    
        try {
            const nome: string = req.params.nome as string
            const cpf: string = req.params.cpf as string
            let buscaUsuario: User[] | undefined = []
            let isUsuarioFound = false
        
            const stringCPF: string = cpf.split(".").join("").split("-").join("")
        
            if (stringCPF.length !== 11 || isNaN(Number(stringCPF))) {
                codigoErro = 422
                throw new Error("O CPF para criação está incorreto. Por gentileza, verifique se há onze digitos e todos são números")
            }
        
            for (let i = 0; i < users.length; i++) {
                if (users[i].nome === nome && users[i].cpf === cpf) {
                    buscaUsuario.push(users[i])
                    isUsuarioFound = true
                }
            }
        
            if (!isUsuarioFound) {
                codigoErro = 404
                throw new Error("Usuário com este nome  e/ou CPF não foi encontrado.")
            }
        
            if (!users) {
                throw new Error("Erro na requisição. Por gentileza, tente novamente mais tarde.")
            }
            res.status(200).send(buscaUsuario)
        
        } catch (err: any) {
            res.status(codigoErro).send(err.message)
        }
}
}