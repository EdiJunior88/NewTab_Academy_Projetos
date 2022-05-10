/* cria um BD cadastro */
show databases;
create database cadastro;
use cadastro;

/* Para criar a tabela, digite o comando abaixo */
create table CadFun (
	CODFUN integer not null primary key,
    NOME varchar(40) not null,
    DEPTO char(2),
    FUNCAO char(20),
    SALARIO decimal(10,2)
);

/* Para mostrar as tabelas do BD em uso, digite */
show tables;

/* Para mostrar a estrutura da tabela, ou de apenas um campo, digite */
describe CadFun;
describe CadFun CODFUN;