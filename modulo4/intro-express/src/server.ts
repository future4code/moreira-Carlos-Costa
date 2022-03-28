import express from 'express'
import { details } from './usersData'
import { post } from "./postsData";

import { AddressInfo } from "net"
const app = express();

app.use(express.json());

const port = process.env.PORT || 3333;


/**============================================= */

app.get("/", (req, res) => {
    return res.status(200).json({ message: "ok" })
})

app.get('/users', (req, res) => {
    const usersData = details

    const users = usersData.map((item) => {

        return item
    })
    return res.status(200).send(users)
})

app.get('/posts', (req, res) => {
    const postData = post

    const posts = postData.map((item) => {

        return item
    })
    return res.status(200).send(posts)
})

app.get('/users/posts/:id', (req, res) => {
    const id = req.params.id
    const postId = post.filter((item) => {
        return item.userId === Number(id)
    }).map((item) => {
        return item
    })
    return res.status(200).send({postId})
})
/**============================================= */

const server = app.listen(port, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});