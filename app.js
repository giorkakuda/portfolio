
function getReal() {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then((response) => response.json())

.then(function(real) {
    /* Bitcoin*/
    const nameBtc = real.BTCBRL.code
    document.getElementById('name').innerHTML = nameBtc

    const priceBtc = real.BTCBRL.bid
    document.getElementById('price').innerHTML = parseFloat(priceBtc).toLocaleString('en', {style: 'currency', currency:'BRL'})

    const pct = real.BTCBRL.pctChange
    document.getElementById('change').innerHTML = parseFloat(pct) + '%'
    
    /* DOLAR*/
    const nameUs = real.USDBRL.code
    document.getElementById('name2').innerHTML = nameUs

    const priceUsd = real.USDBRL.bid
    document.getElementById('price2').innerHTML = parseFloat(priceUsd).toLocaleString('en', {style: 'currency', currency: 'BRL'})

    const pct2 = real.USDBRL.pctChange
    document.getElementById('change2').innerHTML = parseFloat(pct2) + '%'

    /* EURO*/
    const nameEur = real.EURBRL.code
    document.getElementById('name3').innerHTML = nameEur

    const priceEur = real.EURBRL.bid
    document.getElementById('price3').innerHTML = parseFloat(priceEur).toLocaleString('en',{style: 'currency', currency: 'BRL'})

    const pct3 = real.EURBRL.pctChange
    document.getElementById('change3').innerHTML = parseFloat(pct3) + '%'


}); 

}/*
function getDolar() {
    let BTCBRL, USDBRL;


    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then((response) => response.json())
.then(function(response){
    BTCBRL = parseFloat(response.BTCBRL.bid);
    USDBRL = parseFloat(response.USDBRL.bid);
})

.then(function() {
    const btcUsd = BTCBRL / USDBRL;    
    console.log(btcUsd)
});

}

function getEuro() {
    let BTCBRL, EURBRL;

    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then((response) => response.json())
.then(function(response){
    BTCBRL = parseFloat(response.BTCBRL.bid);
    EURBRL = parseFloat(response.EURBRL.bid);
})
.then(function() {
    const btcEur = BTCBRL / EURBRL;
    console.log(btcEur)
})

}

function getExd() {
    let EURUSD;

    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    .then((response) => response.json())
    .then(function(response){
        EURUSD = response(EURBRL.bid) / response(USDBRL.bid)
        console.log(EURUSD)
        
    });
}*/
getReal()
/*getDolar()
getEuro()
getExd()*/