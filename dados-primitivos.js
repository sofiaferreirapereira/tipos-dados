// Manipulação de Strings:
let primeiroNome = "Sofia"
let ultimoNome = "Pereira"
let nomeConcatenado = primeiroNome + ' ' + ultimoNome

console.log(nomeConcatenado)
//----------------------------------

// Operação com Numbers
let numero1 = 10
let numero2 = 20

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let divisao = numero1 / numero2
let multiplicacao = numero1 * numero2
console.log("Soma do números: ", soma, "\n",
            "Subtração: ", subtracao, "\n",
            "Divisão: ", divisao, "\n",
            "Multiplicação: ", multiplicacao, "\n"
            ) 
//----------------------------------

// Booleanos
let chovendo = true
if(chovendo) {
    console.log("Esta chovendo")
} else {
    console.log("Não está chovendo")
}
//----------------------------------

// Null e Undefined
let resposta = null
let nota
console.log(resposta, nota)
//----------------------------------

// Symbol
let idUnico = Symbol()
let produto = {
    [idUnico]: 2711
}
console.log(produto[idUnico])
//----------------------------------

// BigInt: serve para declarar números gigantes
let grandeInteiro = BigInt("09876543209876543209876543210987654321")
console.log(grandeInteiro)
//----------------------------------
