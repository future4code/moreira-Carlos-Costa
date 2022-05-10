import express from 'express'

import {createUser} from "./endpoints/createUser"
import { AddressInfo } from "net"
const app = express();

app.use(express.json());

const port = process.env.PORT || 3333;


const server = app.listen(port, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.post("/users", createUser)