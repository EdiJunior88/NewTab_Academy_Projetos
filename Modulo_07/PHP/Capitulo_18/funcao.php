<?php

// function nossaPrimeiraFuncao($nome = "Anderson") {
//   echo "Olá!! " . $nome;
// }

// nossaPrimeiraFuncao("Bruno");

function quadrado($num) {
  if ($num === 5) {
    return "PROBLEMA";
  }

  return $num * $num;
}

echo quadrado(5);