<?php

// $x = 1000;
// $y = 1000;

// if ($x < $y) {
//   echo "Menor";
// } elseif ($x == $y) {
//   echo "IGUAL";
// } elseif ($x > 100) {
//   echo "MAIOR QUE 100";
// } else {
//   echo "Maior";
// }

$i = 10;

switch ($i) {
  case 0: 
    echo "i equals 0";
    break;
  case 1:
    echo "i equals 1";
    break;
  case 2:
    echo "i equals 2";
    break;
  default:
    echo "i is not equal to 0, 1 or 2";
}