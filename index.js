function calculaSaldoVitoria(vitorias, derrotas) {
    return vitorias - derrotas
} 
function retornaRanking(saldoVitoria) {
    if (saldoVitoria <= 10) {
        return "Ferro"
    } else if (saldoVitoria > 10 && saldoVitoria <= 20) {
        return "Bronze"
    } else if (saldoVitoria > 20 && saldoVitoria <= 50) {
        return "Prata"
    } else if (saldoVitoria > 50 && saldoVitoria <= 80) {
        return "Ouro"
    } else if (saldoVitoria > 80 && saldoVitoria <= 90) {
        return "Diamante"
    } else if (saldoVitoria > 90 && saldoVitoria <= 100) {
        return "Lendário"
    } else if (saldoVitoria > 100) {
        return "Imortal"
    } else {
        return "Sem ranking"
    }
}

let vitorias = 60
let derrotas = 33

const saldoVitoria = calculaSaldoVitoria(vitorias, derrotas)
const ranking = retornaRanking(saldoVitoria)
console.log(`O Herói tem saldo de ${saldoVitoria} vitórias e está no nível de ${ranking}!`)