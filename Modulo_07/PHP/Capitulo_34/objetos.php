<?php

class Pessoa {
  protected $nome;
  public $idade;

  function setNome($nome) {
    $this -> nome = $nome;
  }

  function getNome() {
    return $this -> nome;
  }
}

class PessoaFisica extends Pessoa {
  public $rg;
}

$bruno = new Pessoa;
$bruno -> setNome("Bruno Benessuti");
echo $bruno -> getNome();
$bruno -> idade = 18;
$bruno -> rg = 100200300500; 

print_r($bruno);