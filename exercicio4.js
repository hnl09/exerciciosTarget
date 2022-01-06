const faturamentoMensal = [{"estado": "SP",
"faturamento": 67836.43}, {"estado": "RJ",
"faturamento": 36678.66}, {"estado": "MG",
"faturamento": 29229.88}, {"estado": "ES",
"faturamento": 27165.48}, {"estado": "Outros",
"faturamento": 19849.53}]

function getFaturamento(item) {
    return item.faturamento
}

function somaFaturamento (total, faturamento) {
    return total + faturamento
}

const faturamentos = faturamentoMensal.map(getFaturamento) // Array de apenas valores do faturamento

const somaTotal = faturamentos.reduce(somaFaturamento, 0) // Soma de todos os itens do array

let percentSP = faturamentos[0] / somaTotal * 100
let percentRJ = faturamentos[1] / somaTotal * 100
let percentMG = faturamentos[2] / somaTotal * 100
let percentES = faturamentos[3] / somaTotal * 100
let percentOutros = faturamentos[4] / somaTotal * 100

console.log(`O Percentual de representação que cada estado teve dentro do valor total mensal da distribuidoram foram, respectivamente: São Paulo: ${percentSP.toFixed(2)}%, Rio de Janeiro ${percentRJ.toFixed(2)}%, Minas Gerais ${percentMG.toFixed(2)}%, Espírito Santo ${percentES.toFixed(2)}%, Outros ${percentOutros.toFixed(2)}%.`)