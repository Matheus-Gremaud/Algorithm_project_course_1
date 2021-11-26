var nome, nota1, nota2;
nome =prompt("Digite seu nome:")
nota1 =prompt("Digite sua nota 1:")
nota2 =prompt("Digite sua nota 2:")
media =(parseInt(nota1)+ parseInt(nota2)) /2
 
if(media >=50)
alert(nome + ": Aprovado")
 else
 alert(nome + ": Reprovado")