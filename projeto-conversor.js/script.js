const button = document.getElementById("button-converter")
const select = document.getElementById("currency-select")

const dolar = 5.25
const euro = 5.65
const bitcoin = 90300

const converterValue = () => {
  const inputReais = document.getElementById("input-converter").value
  const realValueText = document.getElementById("real-value-text")
  const currencyValueText = document.getElementById("currency-value-text")

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais)

  if (select.value ==='US$ Dólar Americano' ){
  currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inputReais / dolar)
}
if (select.value ==='€ Euro' ){
  currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(inputReais / euro)
}
if (select.value ==='BTC Bitcoin' ){
    currencyValueText.innerHTML = Math.min(inputReais/bitcoin).toFixed(6)

  }
}
changeCurrency = () =>{
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(select.value ==='US$ Dólar Americano' ){
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './img/estados-unidos (1) 1.jpg'
    }

    if(select.value ==='€ Euro' ){
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './img/euro.jpg'

    }
    if(select.value ==='BTC Bitcoin' ){
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './img/bitcoin.jpg'

    }

    converterValue()
}


button.addEventListener("click", converterValue)
select.addEventListener("change",changeCurrency)
