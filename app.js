
function getReal() {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then((response) => response.json())

.then((real) => {

    const nameBtc = real.BTCBRL.code
    console.log(nameBtc)

    const bitcoin = real.BTCBRL.bid
    console.log(bitcoin)

    const change = real.BTCBRL.pctChange
    console.log(change)
    



   /* const dolar = real.USDBRL.bid
    console.log(dolar)

    const euro = real.EURBRL.bid
    console.log(euro)*/
}); 




}
getReal()
    