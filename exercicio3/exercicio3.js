let jsonData = require('./dados.json') // Essa linha já puxa os dados do JSON e os transforma em um array de objetos

let dadosFiltrados = jsonData.filter(function (item) {
    return item.valor !== 0
}) // Gera um novo array sem valor igual a 0

// Calculando máximo e mínimo

let minimo = Math.min.apply(null, dadosFiltrados.map(function(item) {
    return item.valor
}))

let maximo = Math.max.apply(null, dadosFiltrados.map(function(item) {
    return item.valor
}))

// Calculando a média

function getValores(item) {
    return item.valor
}

function somaValores (total, valor) {
    return total + valor
}

const valores = dadosFiltrados.map(getValores) // Array de apenas valores

const somaTotal = valores.reduce(somaValores, 0) // Soma de todos os itens do array

const mediaDias = somaTotal / valores.length // Calcula a média mensal que é R$ 20865,00

let faturamentoMaior = jsonData.filter(function (item) {
    return item.valor >= 20865
}) // Array novo que retorna os dias do mês cujo faturamento foram superiores á média mensal

console.log('Os dias do mês cujo faturamento foram superiores á média mensal foram:', faturamentoMaior)

console.log(`O menor valor de faturamento mensal foi R$ ${Math.round(minimo)},00`)
console.log(`O maior valor de faturamento mensal foi R$ ${Math.round(maximo)},00`)