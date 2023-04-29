<?php

$i = 2;

while ($i <= 28 && $i != 20) {
    if ($i > 8 && $i < 18 || $i > 20 && $i < 28) {
        $i += 2;
        continue;
    }
    echo $i . " ";
    $i += 2;
}

/*
COM FOR

for ($i = 2; $i <= 28 && $i != 20; $i += 2) {
    
    if ($i > 8 && $i < 18 || $i > 22 && $i < 28){
        continue;
        
    }

    echo $i . " ";
}

QUESTÕES

4)Explique a diferença entre for e while.  

For e while são estruturas que permitem repetir
um bloco de código de uma determinada condição.
A diferença é que for é usado quando o número de
iterações é conhecido, enquanto while é usado quando
é desconhecido.For usa três expressões e while usa 
apenas uma.

5)Todo for pode ser substituído por while? 

Sim, a diferença é que o for é escrito de uma forma mais
compacta e mais fácil de escrever loops quando o número 
de iterações é conhecido, enquato o while é mais usado
quando o número de interações é desconhecido.

6)Todo while pode ser substituído por for? 

Não exatamente, nem todo while pode ser substituído por um for,
o while é mais apropriado quando o número de iterações é desconhecido
ou depende de uma condição específica, enquanto o for é mais adequado 
quando o número de iterações é conhecido.

7)Explique a diferença entre while e do while. 

A principal diferença entre while e do-while é que o while executa 
o bloco de código apenas se a condição for verdadeira na primeira 
iteração, enquanto o do-while executa o bloco de código pelo menos 
uma vez, independentemente da condição ser verdadeira ou falsa.
*/
?>