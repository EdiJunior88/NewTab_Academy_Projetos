<?php 

$array = [
  "foo" => "bar",
  "bar" => 10,
];

// print_r($array["bar"]);

$json = '{"a":1, "b":2, "c":3, "d":4, "e":5}';
$jsonDecode = json_decode($json);

$jsonEncode = json_encode($array);
print_r($jsonEncode);

?>