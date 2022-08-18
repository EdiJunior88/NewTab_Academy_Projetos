<?php
function inverse($x) {
    if ($x == 0) {
        throw new Exception('Divisão por zero.');
    }
    return 1/$x;
}

try {
    // echo inverse(5) . "\n";
    echo inverse(0) . "\n";
} catch (Exception $e) {
    echo 'Exceção capturada: ',  $e->getMessage(), "\n";
}

// Execução continua
echo "Olá mundo\n";