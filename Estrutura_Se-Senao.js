
 function acaoBotao() {
    var valor01, valor02, resultado, operaçao
    valor01 = prompt("Digite o primeiro valor:")
 operaçao= prompt("Digite a operação: Ex: +, -, *, /")
 valor02 = prompt("Digite o segundo valor:")
 
 if (operaçao== "+"){
     resultado= parseInt(valor01) + parseInt (valor02)
 }else if(operaçao== "-"){
     resultado= parseInt(valor01) - parseInt (valor02)
 }else if(operaçao== "*"){
     resultado= parseInt(valor01) * parseInt (valor02)
 }else if(operaçao== "/"){
     resultado= parseInt(valor01) / parseInt (valor02)
 }
 document.getElementById("Paragrafo").innerText= resultado
     
 }
