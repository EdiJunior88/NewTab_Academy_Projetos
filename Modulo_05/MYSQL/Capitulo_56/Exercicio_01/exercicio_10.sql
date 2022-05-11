/* Os operadores lógicos conhecidos na programação também podem ser usados no mySql */
SELECT * FROM cadfun
 WHERE (DEPTO = '3') AND (FUNCAO = 'PROGRAMADOR');
SELECT * FROM cadfun
 WHERE (DEPTO = '3') OR (DEPTO = '5');
SELECT * FROM cadfun
 WHERE NOT (FUNCAO = 'VENDEDOR');
SELECT * FROM cadfun
 WHERE (DEPTO = '5') XOR (FUNCAO = 'PROGRAMADOR');