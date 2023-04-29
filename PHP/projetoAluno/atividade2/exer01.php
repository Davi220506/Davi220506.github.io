<?php

echo "COM FOR <br>";

for($i = 1; $i <= 10; $i++){
    echo "<br>";
    echo "Tabuada do $i";
    echo "<br>";
    for($j = 1; $j <= 10; $j++){
        echo "<br>";
        echo "$i * $j = " . ($i * $j);
        echo "<br>";
    }
}

/*

*/

/*
echo "COM WHILE <br>";

$i = 1;

while($i <= 10){
    echo "<br>";
    echo "Tabuada do $i";
    echo "<br>";
    $j = 1;

    while ($j <= 10){
        echo "<br>";
        echo "$i * $j = " . ($i * $j);
        echo "<br>";
        $j++;
    }
    $i++;
}
*/

/*
echo "Com Do While <br>";

$i = 1;

do {
    echo "<br>";
    echo "Tabuada do $i";
    echo "<br>";
    $j = 1;

    do {
        echo "<br>";
        echo "$i * $j = " . ($i * $j);
        $j++;
        echo "<br>";
    } while ($j <= 10);

    $i++;

} while ($i <= 10);
*/

?>

