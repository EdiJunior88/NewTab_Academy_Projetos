<?php

// var_dump($_SERVER);

// echo "Hello " . htmlspecialchars($_GET["name"]) . "!"; 

$value = "alguma coisa de algum lugar";
setcookie("CookieTeste", $value);
setcookie("CookieTeste2", $value, time() + 3600); /* Expira em 1 hora */