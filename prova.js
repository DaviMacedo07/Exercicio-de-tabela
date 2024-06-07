function armazenaArrayMod(matriz, coluna, modelo) {
    console.log(`Total de peças do modelo ${modelo}`)
    console.log("")
    console.log(matriz[0][coluna] + " Peças PP")
    console.log(matriz[1][coluna] + " Peças P")
    console.log(matriz[2][coluna] + " Peças M")
    console.log(matriz[3][coluna] + " Peças G")
    console.log(matriz[4][coluna] + " Peças GG")
    console.log("")
}


let matriz = new Array(5)
let somaModelos = new Array(10).fill(0)

for(let linha = 0; linha < 5 ; linha++ ){
    matriz[linha] = new Array(10)
    for(let coluna = 0; coluna < 10; coluna++) {
       matriz[linha][coluna] = Math.floor(Math.random() * 10)
       somaModelos[coluna] = somaModelos[coluna] + matriz[linha][coluna]
       
    }
}

console.table(matriz)

for(coluna = 0 ; coluna < 10 ; coluna++) {
    let modelo = (coluna + 1)
    armazenaArrayMod(matriz, coluna, modelo)
} 

console.log(somaModelos)

let maxRoupas = somaModelos[0]
let minRoupas = somaModelos[0]
let modeloMax = 1 
let modeloMin = 1

for (let i = 1; i < somaModelos.length; i++) {
    if (somaModelos[i] > maxRoupas) {
        maxRoupas = somaModelos[i]
        modeloMax = i + 1
    } else if (somaModelos[i] < minRoupas) {
        minRoupas = somaModelos[i]
        modeloMin = i + 1
    }
}

console.log(`O modelo com menor quantidade de peças no estoque é o ${modeloMin} , com ${minRoupas} peças no total`)
console.log(`O modelo com maior quantidade de peças no estoque é o ${modeloMax} , com ${maxRoupas} peças no total`)

let somaTamanho = new Array(5).fill(0)

for (let linha = 0; linha < 5; linha++) {
    for (let coluna = 0; coluna < 10; coluna++) {

    }
}

let tamanhoMinimoEstoque = somaTamanho[0]
let menorEstoque = 'PP'

for (let i = 1; i <somaTamanho.length; i++) {
    if(somaTamanho[i] < tamanhoMinimoEstoque) {
        tamanhoMinimoEstoque = somaTamanho[i]
        menorEstoque = ["PP", "P", "M", "G" , "GG"][i] 
    }
}

console.log(`O tamanho com o menor estoque é o tamanho ${menorEstoque} com ${tamanhoMinimoEstoque} peças.`);
