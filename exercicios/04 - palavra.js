const palavras = ["Oi", "Olá", "HelloWorld"]

const maiorPalavra = palavras.reduce((maior, atual) => {
    if(maior.length < atual.length){
        return atual
    }

    return maior
})
console.log(maiorPalavra)

