// Classe
class Tansfer {


    // Método da classe
    make(dataAccountOrigin, dataAccountDestiny, value) {

        const sufficientBalance = this.#checkBalance(dataAccountOrigin.balance, value)
        
        if (sufficientBalance) {
            const { dataAccountOriginUpdated, dataAccountDestinyUpdated } = this.#accountUpdate({ ...dataAccountOrigin }, { ...dataAccountDestiny }, value)
            this.#printsLogsSuccess(dataAccountOriginUpdated, dataAccountDestinyUpdated)
        }
    }

    #checkBalance(balanceAccountOrigin, valueTransfer) {
        const validBalance = balanceAccountOrigin > valueTransfer
        if (!validBalance) {
            console.log("Saldo insuficiente")
        }
        return validBalance
    }

    #accountUpdate(dataAccountOrigin, dataAccountDestiny, value) {
        const dataAccountOriginUpdated = { ...dataAccountOrigin, balance: dataAccountOrigin.balance - value }
        const dataAccountDestinyUpdated = { ...dataAccountDestiny, balance: dataAccountDestiny.balance + value }
        return { dataAccountOriginUpdated, dataAccountDestinyUpdated }
    }

    #printsLogsSuccess(dataAccountOriginUpdated, dataAccountDestinyUpdated) {
        console.log("Origem")
        console.table(dataAccountOriginUpdated)
        console.log("Destino")
        console.table(dataAccountDestinyUpdated)
    }
}

const accountOrigin = {
    name: "João",
    balance: 2000
}

const accountDestiny = {
    name: "Ana",
    balance: 280
}

const valueTransfer = 1805

const tansfer = new Tansfer()

tansfer.make(accountOrigin, accountDestiny, valueTransfer)



