/* Vamos alterar o salário do funcionário 7 e transferir a Ana Bastos do departamento 5 para o 3. Os
SELECT mostram o estado antes e depois dos UPDATE. */
SELECT * FROM cadfun WHERE CODFUN = 7;

UPDATE cadfun SET SALARIO = 2300.56 WHERE CODFUN = 7;

SELECT * FROM cadfun WHERE CODFUN = 7;

SELECT * FROM cadfun WHERE NOME = 'ANA BASTOS';

UPDATE cadfun SET DEPTO = '3' WHERE NOME = 'ANA BASTOS';

SELECT * FROM cadfun WHERE NOME = 'ANA BASTOS';

/* Vamos também conceder um reajuste de 10% para todos os empregados. Digite: */
SELECT * FROM cadfun;

UPDATE cadfun SET SALARIO = SALARIO * 1.10;

SELECT * FROM cadfun;