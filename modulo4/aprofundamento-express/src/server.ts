import express,{Request, Response} from 'express'
import { todoList } from './todoList'
//import { post } from "./postsData";

import { AddressInfo } from "net"
const app = express();

app.use(express.json());

const port = process.env.PORT || 3333;


/**============================================= */

app.get("/ping", (req: Request, res: Response) => {
    return res.status(200).json({ message: "Pong" })
})

app.get('/todos', (req: Request, res: Response) => {
    const usersData = todoList

    const todos = usersData.map((item) => {

        return item
    })
    return res.status(200).send(todos)
})

app.get("/todos/:status", (req: Request, res: Response) => {
    const status = req.params.status;
    if (status !== "false" && status !== "true") {
        res.status(400).send("Insira um status válido: true ou false.")
    } else {
        const result = todoList.filter((task) => {
            if (status === "true" && task.completed === true) {
                return task;
            } else if (status === "false" && task.completed === false) {
                return task;
            }
        });
        res.status(200).send(result);
    }
});

app.post("/todos/add", (req, res) => {
    const body = req.body;
    const userId = Number(req.body.userId);
    if (!body.title || !body.userId || isNaN(userId)) {
        res.status(400).send("Necessário incluir um body contendo: 'userId' = number e 'title' = string.")
    } else {
        todoList.push({
            userId: Number(body.userId),
            id: todoList.length + 1,
            title: body.title,
            completed: false,
        });
        res.status(200).send(todoList);
    }
});

app.put("/todos/edit", (req, res) => {
    const body = {
        userId: Number(req.body.userId),
        id: Number(req.body.id)
    }
    if (isNaN(body.id) || isNaN(body.userId)) {
        res.status(400).send("Necessário incluir um body contendo: 'userId' = number e 'id' = number.")
    } else {
        const result = todoList.filter((task) => {
            if (task.id === body.id && task.userId === body.userId) {
                task.completed = !task.completed;
                return task;
            }
        });
        result.length === 0 ? res.status(400).send("Nenhuma tarefa encontrada.") : res.status(200).send(todoList);
    }
});

app.delete("/task/", (req, res) => {
    const body = { id: Number(req.body.id) }
    const searchTask = todoList.filter((task) => {
        return task.id === body.id;
    });
    if (searchTask.length === 0) {
        res.status(400).send("Tarefa não encontrada. Insira um id de tarefa válido no body.");
    } else {
        const indexTask = todoList.findIndex((task) => task.id === body.id);
        todoList.splice(indexTask, 1);
        res.status(200).send(todoList);
    }
});


app.get("/tasks", (req, res) => {
    const userId = Number(req.query.userId);
    let selectedUser = [];
    let others = [];

    for (let i = 0; i < todoList.length; i++) {
        if (userId === todoList[i].userId) {
            selectedUser.push(todoList[i]);
        } else {
            others.push(todoList[i]);
        }
    }
    const result = {
        todos: [
            { selectedUser },
            { others }
        ]
    }

    if (selectedUser.length === 0) {
        res.status(400).send("Usuário não encontrado.");
    } else {
        res.status(200).send(result);

    }
});

/**============================================= */
const server = app.listen(port, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});