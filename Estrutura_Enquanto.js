function acaoBotao() {
    var nome, idade, limite, contador
    limite= prompt("Digite a quantiade de vezes que desaja verificar a idade: ")
    contador= 0
    while(contador < limite){
        nome= prompt("Digete o nome da pessoa: ")
        idade=prompt("Digite a idade do(a) " + nome)
        if (idade >= 18)
        document.getElementById("Paragrafo").innerText= nome + " você é maior de idade!" 
        else
        document.getElementById("Paragrafo").innerText= nome+ " você é menor de idade!"
        contador++

    }
 
   }  