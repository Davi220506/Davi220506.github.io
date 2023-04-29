<?php
function retornaMedia(float $n1, float $n2):float {
    $media = ($n1+$n2)/2;
    return $media;
}

function grauDoAluno(float $m, string &$g):void {
    if($m > 8)
    $g = 'A';
    elseif($m >= 6)
    $g = 'B';
    elseif($m >= 4)
    $g = 'C';
    elseif($m >= 2)
    $g = 'D';
    else
    $g = 'E';
}
?>
