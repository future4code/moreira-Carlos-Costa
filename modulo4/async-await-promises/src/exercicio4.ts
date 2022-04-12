import axios from "axios"
import { baseURL } from "./service"

//a)
// Resposta: O tipo dela será async e o endpoint é o put.

// b)


async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: "Alo",
      content: "Homem raivoso morde cachorro tranquilo", 
      date: 2022-4-11
    });
  }
