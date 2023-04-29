<?php
require_once ("funcoes.php");

if(isset ($_POST ["nome"]) && isset ($_POST ["nota1"]) && isset ($_POST ["nota2"])) {
    $nome = $_POST["nome"];
    $nota1 = floatval($_POST["nota1"]);
    $nota2 = floatval($_POST["nota2"]);
    $grau = "";
    $media = retornaMedia($nota1, $nota2);

    grauDoAluno($media, $grau);
    echo "Nome: {$nome}<br>";
    echo "Média: {$media}<br>";
    echo "Grau: {$grau}";
}else{
    echo "Algo deu errado!";
}
?>

