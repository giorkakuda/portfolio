
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
    if (pct > 0){document.getElementById('change').style.color = 'green', document.getElementById('price').style.color = 'green';}
    else {document.getElementById('change').style.color = 'red', document.getElementById('price').style.color = 'red'};
    
    /* DOLAR*/
    const nameUs = real.USDBRL.code
    document.getElementById('name2').innerHTML = nameUs

    const priceUsd = real.USDBRL.bid
    document.getElementById('price2').innerHTML = parseFloat(priceUsd).toLocaleString('en', {style: 'currency', currency: 'BRL'})

    const pct2 = real.USDBRL.pctChange
    document.getElementById('change2').innerHTML = parseFloat(pct2) + '%'
    if (pct2 > 0){document.getElementById('change2').style.color = 'green', document.getElementById('price2').style.color = 'green';}
    else (document.getElementById('change2').style.color = 'red', document.getElementById('price2').style.color = 'red')


    /* EURO*/
    const nameEur = real.EURBRL.code
    document.getElementById('name3').innerHTML = nameEur

    const priceEur = real.EURBRL.bid
    document.getElementById('price3').innerHTML = parseFloat(priceEur).toLocaleString('en',{style: 'currency', currency: 'BRL'})

    const pct3 = real.EURBRL.pctChange
    document.getElementById('change3').innerHTML = parseFloat(pct3) + '%'
    if(pct3 > 0){document.getElementById('change3').style.color = 'green', document.getElementById('price3').style.color = 'green'}
    else(document.getElementById('change3').style.color = 'red', document.getElementById('price3').style.color = 'red')


}); 
}


function getDolar() {
    /* convert BTC-BRL to BTC-USD */
    let BTCBRL, USDBRL;
    
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then((response) => response.json())
.then(function(response){
    BTCBRL = parseFloat(response.BTCBRL.bid);
    USDBRL = parseFloat(response.USDBRL.bid);
    const pct = response.BTCBRL.pctChange;
    
    const btcUsd = BTCBRL / USDBRL;    
    document.getElementById('price4').innerHTML = 'BTC ' + (btcUsd).toLocaleString('en',{style:'currency',currency:'USD'})
    if(pct > 0){document.getElementById('price4').style.color = 'green'}
    else{document.getElementById('price4').style.color = 'red'}
});

}

function getExd() {
    /* convert EUR-BRL USD-BRL to EURUSD */
    let EURUSD;

    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    .then((response) => response.json())
    .then(function(response){
        EURUSD = response['EURBRL'].bid / response['USDBRL'].bid;
        document.getElementById('price5').innerHTML = 'EUR '+(EURUSD).toLocaleString('en',{style:'currency',currency:'USD'})
        if('USDBRL' > 'EURBRL') {document.getElementById('price5').style.color = 'green'}
        else{document.getElementById('price5').style.color = 'red'}
        
    });
}

function getEuro() {
    /* convert BTC-BRL to BTC-EUR */
    let BTCBRL, EURBRL;

    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then((response) => response.json())
.then(function(response){
    BTCBRL = parseFloat(response.BTCBRL.bid);
    EURBRL = parseFloat(response.EURBRL.bid);
    const pct = response.BTCBRL.pctChange;

    const btcEur = BTCBRL / EURBRL;
    document.getElementById('price6').innerHTML = 'BTC '+(btcEur).toLocaleString('en',{style:'currency', currency: 'EUR'});
    if (pct > 0){document.getElementById('price6').style.color = 'green'}
    else{document.getElementById('price6').style.color = 'red'}
})

}


function Run1() {
    getDolar();
    getEuro();
    getExd();
}

const timerId = setInterval(Run1, 2000);
clearInterval(timerId)

function Run2() {
    getReal();
}
setInterval(Run2, 5000);

