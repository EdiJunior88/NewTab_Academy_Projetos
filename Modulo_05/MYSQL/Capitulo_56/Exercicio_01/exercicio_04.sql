/* Para ver todos os funcionários cadastrados, digite */
SELECT * FROM cadfun;

/* Para ver somente o nome e a função, digite: */
SELECT NOME, FUNCAO FROM cadfun;

/* Para ver quem trabalha em um departamento, digite: */
SELECT NOME, CODFUN FROM cadfun
	WHERE DEPTO = '3';
    
/* Para mudar a ordem da consulta, ascendente e descendente, digite estes exemplos: */
SELECT NOME, SALARIO FROM cadfun
	ORDER BY NOME;
    
SELECT NOME, SALARIO FROM cadfun
	ORDER BY NOME DESC;
    
SELECT NOME, SALARIO FROM cadfun
	ORDER BY NOME ASC;
    
SELECT DEPTO, NOME FROM cadfun
	ORDER BY NOME DESC;

SELECT NOME FROM cadfun
	WHERE DEPTO = '3'
    ORDER BY NOME;