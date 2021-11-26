/* escreval( "Digite seu nome:")
    leia(nome)
    escreval( "Digite sua nota 1:")
    leia(nota1)
    escreval( "Digite sua nota 2:")
    leia(nota2)
    media := (nota1 + nota2) / 2
    se media >= 50 entao
    escreval( "Aprovado")
    senao
     escreval("Reprovado")
fimse*/
var nome, nota1, nota2;
nome =prompt("Digite seu nome:")
nota1 =prompt("Digite sua nota 1:")
nota2 =prompt("Digite sua nota 2:")
media =(parseInt(nota1)+ parseInt(nota2)) /2
 
if(media >=50)
alert(nome + ": Aprovado")
 else
 alert(nome + ": Reprovado")