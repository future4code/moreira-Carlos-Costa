### Exercício 1

a)
```

```
####resposta: 
*chave estrangeria é outra change que vem referenciando uma primary key de outra tabela.*

b)
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
		coment TEXT NOT NULL,
		rate FLOAT NOT NULL,
      movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Films(ID)
);
INSERT INTO Rating VALUES 
('1','RAZOAVEL',5.7,'1'),
('2','MUITO BOM',8.7,'1'),
('3','BOM',7.7,'1'),
('4','MUITO RUIM',2.5,'2'),
('5','RAZOAVEL',5.0,'4'),
('6','SEM EMOÇÃO',6.6,'5'),
('7','MUITO BOM',8.9,'3'),
('8','MUITO BOM',10.0,'3'),
('9','BOM',7.0,'3'),
('10','RUIM',1.0,'3');
```

c)
```
INSERT INTO Rating VALUES ('11','MUITO BOM',8.7,'100');
```
####resposta: 
*O exemplo acima demonstra como usar o comando `INSERT INTO` para criar umas avaliação mais retornará um erro por que não existe uma chave estrageira com o valor passado.*

d)
```
ALTER TABLE Films DROP COLUMN avaliacao ; 
```
e)
```
DELETE FROM Films where ID = '1';
```
####resposta: 
*O exemplo acima demonstra como usar o comando `DELETE FROM` para deletar um filme com avaliações mais retornará um erro por que não pode apagar uma chave extrangeira.*

____

### Exercício 2

a) 
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
####resposta: 
*O exemplo acima demonstra como usar o comando `CREATE TABLE` para criar uma tabela de nome `MovieCast` e com relacionamentos entre as tabelas atores e filmes*

b)
````
CREATE TABLE MovieCast(
movie_id VARCHAR (255),
actor_id VARCHAR (255),
FOREIGN KEY (movie_id) REFERENCES Films(ID),
FOREIGN KEY (actor_id) REFERENCES Actor(ID)
);
INSERT INTO MovieCast VALUES
('1','007'),
('2','002'),
('3','003'),
('4','006'),
('5','001'),
('3','002');
````

c)  
```
update Actor set name = "Bruna Markezine", birth_date = "1989-10-16", salary = "1000000", gender = "female" where id = "005";
```

d)  
```
Error Code: Error id não encontrado.
```
____
### Exercício 3
a) 
```
delete from Actor where name = "Bruna Markezine";
```

b) 
```
delete from Actor where salary > "1000000" and gender = "male";
```

### Exercício 4
a) 
```
select max(salary) from Actor;
```

b)  
```
select min(salary) from Actor where gender = "female";
```

c)  
```
select COUNT(*) from Actor where gender = "female";
```

d)  
```
select sum(salary) from Actor;
```

### Exercicio 5

a) 
```
Ele retorna a contagem de quantas pessoas de cada genero existe na tabela;
```

b) 
```
select id, name from Actor order by name desc;
```

c) 
```
select * from Actor order by salary;
```

d) 
```
select * from Actor order by salary desc limit 3;
```

e) 
```
select avg(salary), gender from Actor group by gender;
```
_____
### Exercicio 6
a) 
```
alter table Movie add data_limite date;
```

b) 
```
alter table Movie change rating rating float;
```

c)  
```
update Movie set playing_limit_date = "2020-12-31" where id = "003";

update Movie set playing_limit_date = "2015-12-31" where id = "001";
```
d)  
```
delete from Movie where id = "003";

update Movie set sinopse = "deletado" where id = "003";

Teve sucesso mas nenhuma linha foi afetada.