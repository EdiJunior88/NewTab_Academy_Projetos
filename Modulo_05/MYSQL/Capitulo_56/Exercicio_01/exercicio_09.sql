/* Operadores de comparação ou relacionais */
SELECT * FROM cadfun WHERE DEPTO = ‘5’;

SELECT * FROM cadfun WHERE FUNCAO = 'VENDEDOR';

SELECT * FROM cadfun WHERE SALARIO <= 1700;

SELECT * FROM cadfun WHERE SALARIO > 1700 + 50;

SELECT * FROM cadfun WHERE SALARIO > (1700 + 50);