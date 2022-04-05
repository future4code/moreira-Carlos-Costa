### Exercício 1

a)
```
ALTER TABLE Actor DROP COLUMN salary;
```
####resposta: 
*O exemplo acima demonstra como usar o comando ALTER TABLE para adicionar e depois remover colunas básicas de tabelas.*

b)
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
####resposta: 
*O exemplo acima demonstra como usar o comando ALTER TABLE para adicionar e depois mudar o gender para sex `VARCHAR(6)`.*

c)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
####resposta: 
*O exemplo acima demonstra como usar o comando ALTER TABLE para adicionar e depois mudar o gender para gender `VARCHAR(255)`.*

d)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
____

### Exercício 2

a) 
```
UPDATE Actor SET name = "Moacyr Franco" , birth_date= "2014-08-02" WHERE id = "003";
```

b)
````
update Actor set name = "JULIANA PAES" where name = "Juliana Paes";
update Actor set name = "Juliana Paes" where name = "JULIANA PAES";
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
update Movie set data_limite = "2020-12-31" where id = "003";

update Movie set data_limite = "2015-12-31" where id = "001";
```
d)  
```
delete from Movie where id = "003";

update Movie set sinopse = "deletado" where id = "003";

Teve sucesso mas nenhuma linha foi afetada.
```