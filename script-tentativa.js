const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



async function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())

    const dolar = data.USDBRL.ask
    const euro = data.EURBRL.ask
    const bitcoin = data.BTCBRL.ask
    const libra = data.GBPBRL.ask

    
    if(currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar)
    }

    if(currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
       }).format(inputCurrencyValue / euro)
    }

    if(currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
       }).format(inputCurrencyValue / libra)
    }

    if(currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
       }).format(inputCurrencyValue / bitcoin)
    }

  

   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
   }).format(inputCurrencyValue)
}
        


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const imageCurrency = document.querySelector(".image-currency")
    
    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        imageCurrency.src = "./assets/usa.png.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        imageCurrency.src = "./assets/euro.png.png"
    }

    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        imageCurrency.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BitCoin"
        imageCurrency.src = "./assets/bitcoin.png.png"
    }

    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)