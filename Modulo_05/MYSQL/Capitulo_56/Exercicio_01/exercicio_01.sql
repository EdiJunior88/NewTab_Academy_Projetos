/* Para testar estas instruções, digite as instruções abaixo, no prompt do MySql */
show databases;
create database teste;
show databases;

/* Para verificar o erro e a criação de um BD já existente, digite: */
create database teste;
show databases;
create database if not exists teste;
show databases;

/* Coloque o BD teste em uso, Apague o BD, Depois,
verifique novamente os BDs existentes*/
use teste;
drop database teste;
show databases;