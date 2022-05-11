/* Alguns operadores adicionais podem ser usados no mySql. Para testar estes operadores, 
crie um novo campo (a quantidade de filhos) nas tabelas CadFun e Morto e depois verifique 
seus valores. Para isto, digite: */
ALTER TABLE cadfun ADD FILHOS SMALLINT;

ALTER TABLE morto ADD FILHOS SMALLINT;

SELECT NOME, FILHOS FROM cadfun;

SELECT CODFUN, NOME, FILHOS FROM cadfun
 WHERE FILHOS IS NULL;
SELECT CODFUN, NOME, FILHOS FROM cadfun
 WHERE NOT FILHOS IS NULL;
SELECT CODFUN, NOME, FILHOS FROM cadfun
 WHERE FILHOS IS NOT NULL;
SELECT CODFUN, NOME, FILHOS FROM cadfun
 WHERE NOT (FILHOS IS NULL);
 
 /* Vamos alterar os valores deste campo para melhorar os exemplos. Para isto, digite: */
UPDATE cadfun SET FILHOS = 1 WHERE CODFUN = 2;

UPDATE cadfun SET FILHOS = 3 WHERE CODFUN = 3;

UPDATE cadfun SET FILHOS = 2 WHERE CODFUN = 5;

UPDATE cadfun SET FILHOS = 1 WHERE CODFUN = 9;

UPDATE cadfun SET FILHOS = 4 WHERE CODFUN = 20;

UPDATE cadfun SET FILHOS = 3 WHERE CODFUN = 25;

SELECT CODFUN, NOME, FILHOS FROM cadfun;

SELECT CODFUN, NOME, FILHOS FROM cadfun
 WHERE FILHOS IS NULL;
SELECT CODFUN, NOME, FILHOS FROM cadfun
 WHERE NOT (FILHOS IS NULL);
SELECT * FROM cadfun
 WHERE SALARIO BETWEEN 1700 AND 2000;
SELECT * FROM cadfun
 WHERE SALARIO NOT BETWEEN 1700 AND 2000;
SELECT * FROM cadfun
 WHERE DEPTO IN ('2', '3');
SELECT * FROM cadfun
 WHERE DEPTO NOT IN ('2', '3');
 
 /* O operador LIKE é ainda mais poderoso, pois pode trabalhar com dois caracteres curinga:
% (percentagem) significa qualquer quantidade (0, 1, 2...) de caracteres combinando, (alguns
BDs usam * asterisco), _ (sublinhado) significa apenas um caractere igual. Digite os comandos 
a seguir para testar o operador Like: */
SELECT * FROM cadfun WHERE NOME LIKE 'A%';

SELECT * FROM cadfun WHERE NOME LIKE '_A%';

SELECT * FROM cadfun WHERE NOME LIKE '%AN%';

SELECT * FROM cadfun WHERE SALARIO LIKE '%6';

SELECT * FROM cadfun WHERE SALARIO LIKE '_5%2';

SELECT * FROM cadfun WHERE NOME NOT LIKE '%AN%';