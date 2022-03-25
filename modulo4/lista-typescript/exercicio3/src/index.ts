enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror",
  }
  
  type filmes = {
      nome: string,
      lançamento: number,
      genero: GENERO,
      pontuacao: number | null | undefined
  }
  
    function typesFilmes (
      name: string, 
      year: number, 
      category: GENERO, 
      score?: number | null | undefined) : filmes {
      
      const movie: filmes = {
          nome: name,
          lançamento: year,
          genero: category,
          pontuacao: score
      }    
  
      return movie
  }
  
  console.log(typesFilmes("Duna", 2021, GENERO.ACAO , 74))