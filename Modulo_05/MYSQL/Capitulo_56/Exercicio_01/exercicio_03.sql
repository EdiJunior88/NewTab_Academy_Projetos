/* A inserção de registros pode ser feita pelos comandos INSERT e pelo comando LOAD DATA */
INSERT INTO cadfun
(CODFUN, NOME, DEPTO, FUNCAO, SALARIO)
VALUES (12, 'CARLOS ALBERTO', '3', 'VENDEDOR', 1530.00);

/* Só por castigo, ou melhor, para treinar um pouco mais, acrescente mais dois registros: */
INSERT INTO cadfun
(CODFUN, NOME, DEPTO, FUNCAO, SALARIO)
VALUES (15, 'MARCOS HENRIQUE', '2', 'GERENTE', 1985.75);

INSERT INTO cadfun
(CODFUN, NOME, DEPTO, FUNCAO, SALARIO)
VALUES (7, 'APARECIDA SILVA', '3', 'SECRETARIA', 1200.05);

/* Por exemplo, o comando a seguir insere um registro sem informar o campo FUNCAO. */
INSERT INTO cadfun
(CODFUN, NOME, DEPTO, SALARIO)
VALUES (44, 'JACIBA DA SILVA', '3', 1500.00);

/* Quando estiver inserindo todos os campos do registro e na sua ordem correta, você pode suprimir a primeira parte da instrução. */
INSERT INTO cadfun
VALUES (2, 'WILSON DE MACEDO', '3', 'PROGRAMADOR', 1050.00);

INSERT INTO cadfun
VALUES (5, 'AUGUSTO SOUZA', '3', 'PROGRAMADOR', 1050.00);