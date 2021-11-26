function acaoBotao() {
    var numero, fatorial 
    numero= prompt("Digite o número para saber seu fatorial:")
    fatorial= 1
    for (var contador = 1; contador<= numero; contador++) {
        fatorial = fatorial * contador
        
    }
        
 
 document.getElementById("Paragrafo").innerText= fatorial
   }  