const numeros = [10, 20, 30, 40, 50]

const total = numeros.reduce((acc, item) => {
    console.log(acc);
    console.log(item);
    return acc + item
})

console.log(total);