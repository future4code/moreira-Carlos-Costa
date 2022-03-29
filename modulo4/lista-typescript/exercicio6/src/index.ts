
type CountBank = {
    cliente: string;
    saldoTotal: number;
    debitos: number[];
  }[];
  
  const clients: CountBank = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] },
  ];
  
  const countNegative = (data: CountBank) =>{
    const filtering = data.filter((c) => {
      const debs = c.debitos.reduce((acc, sum) => { 
          return acc + sum; 
      }, 0);
  
      const balance = c.saldoTotal - debs;
      return balance < 0;
    });
  
    const negativeBalance = filtering.map((res) => {
      const debs =res.debitos.reduce((acc, sum) => { 
          return acc + sum; 
      }, 0);
     res.saldoTotal =res.saldoTotal - debs;
     res.debitos = []
  
      return res
    })
    return negativeBalance
  }
  
  console.log(countNegative(clients))