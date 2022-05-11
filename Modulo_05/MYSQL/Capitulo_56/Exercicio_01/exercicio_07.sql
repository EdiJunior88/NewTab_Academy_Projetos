/* Vamos colocar na tabela o campo ADMISSAO (data de admissão). Em seguida, vamos preencher
os dados destes campos. No mySql o formato da data é: ‘aaaa-mm-dd’; em outros SGBD este
formato pode ser diferente. Os SELECT mostram o estado da tabela antes e depois */

SELECT * FROM cadfun;

ALTER TABLE cadfun ADD ADMISSAO DATE;

SELECT * FROM cadfun;

UPDATE cadfun SET ADMISSAO = '2006-01-15' WHERE CODFUN = 2;

UPDATE cadfun SET ADMISSAO = '1999-10-21' WHERE CODFUN = 3;

UPDATE cadfun SET ADMISSAO = '2004-10-21' WHERE CODFUN = 4;

UPDATE cadfun SET ADMISSAO = '2006-04-26' WHERE CODFUN = 5;

UPDATE cadfun SET ADMISSAO = '1980-05-10' WHERE CODFUN = 7;

UPDATE cadfun SET ADMISSAO = '1999-12-15' WHERE CODFUN = 9;

UPDATE cadfun SET ADMISSAO = '2000-12-21' WHERE CODFUN = 12;

UPDATE cadfun SET ADMISSAO = '2000-10-21' WHERE CODFUN = 25;

SELECT * FROM cadfun; 

/* Vamos aproveitar e testar o campo de data. O primeiro select usa uma função para extrair o mês; o
segundo usa >=. Digite: */
SELECT NOME, ADMISSAO FROM cadfun WHERE MONTH(ADMISSAO) = 12;

SELECT NOME, ADMISSAO FROM cadfun WHERE ADMISSAO >= '2000-01-01';

/* Para preparar a tabela para os próximos exercícios, vamos recriar o departamento 2, readmitir um
empregado e admitir outros três. Digite: */
INSERT INTO cadfun VALUES (
 15, 'MARCOS HENRIQUE', '2', 'GERENTE', 2184.33, '2006-05-25');
INSERT INTO cadfun VALUES (
 20, 'AUDREY TOLEDO', '2', 'SUPERVISORA', 1700.00, '2006-07-05');
INSERT INTO cadfun VALUES (
 22, 'SANDRA MANZANO', '2','ANALISTA', 2000.00, '2006-07-01');
INSERT INTO cadfun VALUES (
 24, 'MARCIO CANUTO', '2', 'PROGRAMADOR', 1200.00, '2006-07-10');
SELECT * FROM cadfun;

