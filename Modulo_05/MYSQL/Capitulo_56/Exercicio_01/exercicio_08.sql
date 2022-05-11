/* Os operadores aritméticos (soma, subtração, multiplicação, divisão e resto) estão descritos na tabela
anexa “tabela de operadores e funções matemáticas”. Os operadores podem ser usados dentro de um
comando Select: eles criam um campo calculado dentro da consulta, mas não afetam os valores das
tabelas. Verifique, após os exemplos abaixo, que a tabela permanece inalterada. Digite: */

SELECT NOME, SALARIO FROM cadfun;

SELECT NOME, SALARIO + 100 FROM cadfun;

SELECT NOME, SALARIO FROM cadfun;

SELECT NOME, SALARIO * 1.20 FROM cadfun;

SELECT NOME, SALARIO FROM cadfun;
