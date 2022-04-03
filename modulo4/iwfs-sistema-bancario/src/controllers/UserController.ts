import {Request, Response} from 'express'
import {users, User} from '../data'

export const userController = {

    store: (req: Request, res: Response) => {
        
        let errorCode = 400
        try {
            const nome: string = req.body.nome
            const cpf: string = req.body.cpf
            const dataDeNascimento:string = req.body.dataDeNascimento
            const saldo: number = req.body.saldo
            const dataSplit: string[] = dataDeNascimento.split('/')
            const anoNascimento: string = dataSplit[2]
            console.log(anoNascimento, dataDeNascimento)
            if (!nome || !cpf || !anoNascimento) {
                errorCode = 422
                throw new Error('Por favor, verifique suas informações. Nome, CPF e ano de nascimento são de preenchimento obrigatório')
            }
            const idadeUsuario: number = 2022 - Number(anoNascimento)
            if (idadeUsuario < 18) {
                errorCode = 406
                throw new Error('A criação de contas só é permitida a usuários maiores de 18 anos')
            }
            const novoUsuario: User = {
                nome: nome,
                dataDeNascimento: dataDeNascimento,
                cpf: cpf,
                saldo: saldo,
                extratoDados: []
            }
            users.push(novoUsuario)
            res.status(201).send({ message: 'usuário criado com sucesso' })
        } catch (error: any) {
            res.status(errorCode).send({ message: error.message })
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
        let codeError = 500
    
        try {
            const nome: string = req.query.nome as string
            const cpf: string = req.query.cpf as string
            const usuario: User | undefined = users.find((usuario) => usuario.nome.toLowerCase() === nome.toLowerCase() && usuario.cpf === cpf)
            if (!usuario) {
                codeError = 404
                throw new Error('Usuário não encontrado')
            }
            res.status(200).send(`Seu saldo é de R$${usuario.saldo}`)
        } catch (error: any) {
            res.status(codeError).send({ message: error.message })
        }
    },
    update: (req: Request, res: Response) => {
        let errorCode: number = 400
    try {
        const nome = req.query.nome
        const cpf = req.query.cpf
        const saldo = Number(req.body.saldo)
    
        const conta = users.find((conta) => {
            return conta.nome == nome && conta.cpf == cpf
        })
        if (conta != null && conta != undefined) {
            conta.saldo = Number(conta.saldo) + saldo
            console.log(conta)
            res.status(200).send("O seu novo saldo é: " + conta.saldo)
        } else {
            res.status(404).send("Não encontrada conta com esses dados.")
        }
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
    }
}