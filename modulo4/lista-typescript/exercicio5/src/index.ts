
enum role {
    USER = "user",
    ADMIN = "admin",
  }
  
  type Template = {
    name: string;
    email: string;
    role: role;
  }[];
  
  const employees: Template = [
    { name: "Rogério", email: "roger@email.com", role: role.USER },
    { name: "Ademir", email: "ademir@email.com", role: role.ADMIN },
    { name: "Aline", email: "aline@email.com", role: role.USER },
    { name: "Jéssica", email: "jessica@email.com", role: role.USER },
    { name: "Adilson", email: "adilson@email.com", role: role.USER },
    { name: "Carina", email: "carina@email.com", role: role.ADMIN },
  ];
  
  const emailsList = (array: Template): string[] => {
    const filterList = array.filter((res) => {
      return res.role === role.ADMIN;
    });
  
    const emails = filterList.map((res) => {
      return res.email;
    });
  
    return emails;
  }
  
  console.log(emailsList(employees));