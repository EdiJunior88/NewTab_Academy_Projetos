<?php

class Pessoa {
  public $nome;
  public $idade;
}

$bruno = new Pessoa;
$bruno-> nome = "Bruno Benessuti";
$bruno -> idade = 18;

print_r($bruno);

$fernando = new Pessoa;
$fernando-> nome = "Fernando";
$fernando -> idade = 30;

print_r($fernando);