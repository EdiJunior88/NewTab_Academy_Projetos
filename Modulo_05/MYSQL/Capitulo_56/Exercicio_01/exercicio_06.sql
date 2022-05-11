/* Vamos excluir o departamento 2 inicialmente e depois o empregado Marcelo Souza. Os SELECT
mostram o estado antes e depois dos DELETE */
SELECT * FROM cadfun;

SELECT DISTINCT DEPTO FROM cadfun;

DELETE FROM cadfun WHERE DEPTO = '2';

SELECT * FROM cadfun;

SELECT DISTINCT DEPTO FROM cadfun;

DELETE FROM cadfun WHERE NOME = 'MARCELO SOUZA';

SELECT * FROM cadfun;