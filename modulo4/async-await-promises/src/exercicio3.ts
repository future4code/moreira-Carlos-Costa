import axios from "axios"
import { baseURL } from "./service"

//a)
//Resposta: não da erro pois a Promise está esperando receber um array do tipo user, e nosso type é um user.


// b)
// Resposta: Sim é indicado fazer pois Promisse do tipo Any, retorna qualquer informação, então se eu quero informações específicas devo fazer o mapeamento.


// c. Reimplemente a função, corretamente.

const getSubscribers = async (): Promise<any> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
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