import axios from "axios"
import { baseURL } from "./service"

//a) Resposta: Utilizamos o endpoint GET.

// b) Declaramos ela como async.

// c)

    async function getSubscribers(): Promise<any[]> {
        const response = await axios.get(`${baseURL}/subscribers`);
        return response.data;
    };
  
  const main = async (): Promise<void> => {
      try {
          const subscribers = await getSubscribers()
          console.log(subscribers)
      } catch (error: any) {
          console.log(error.response?.data || error.message)
      } 
  
  }

  main()
