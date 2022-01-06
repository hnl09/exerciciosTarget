const array = [0, 1]

var fibonacci = (num) => {
    let a, b
    for (let i = 2; i < num; i++){
        a = array[i - 1]
        b = array[i - 2]
        array.push(a + b)
    }
    if (array.includes(num)) {
        return console.log(`Sequencia de Fibonacci: ${array}. Esse É um número de Fibonacci!`)
    } else {
        return console.log(`Sequencia de Fibonacci: ${array}. Esse NÃO É um número de Fibonacci!`)
    }
}

fibonacci(10)