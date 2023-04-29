<?php

$i = 2;

while ($i <= 28) {
    if ($i > 8 && $i < 18 || $i > 20 && $i < 28) {
        $i += 2;
        continue;
    }
    echo $i . " ";
    $i += 2;
}

/*
COM FOR

for ($i = 2; $i <= 28; $i += 2) {
    if ($i > 8 && $i < 18 || $i > 22 && $i < 28){
        continue;
    }

    echo $i . " ";
}

COM WHILE 

$i = 2;

while ($i <= 28) {
    if ($i > 8 && $i < 18 || $i > 22 && $i < 28){
        $i += 2;
        continue;
    }
    echo $i . " ";
    $i += 2;    
}
*/

?>