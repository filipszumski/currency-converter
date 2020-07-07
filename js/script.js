console.log("Hello World");

let formElement = document.querySelector(".js-form");
let amountRecivedElement = document.querySelector(".js-amountRecived");
let moneyAmountElement = document.querySelector(".js-moneyAmount")
let possessedCurrencyElement = document.querySelector(".js-possessedCurrency");
let wantedCurrencyElement = document.querySelector(".js-wantedCurrency")
let currencyRateElement = document.querySelector(".js-currencyRate")

let plnRate = 1;
let eurRate = 4.4660;
let usdRate = 3.9806;
let gbpRate = 4.8851;
let chfRate = 4.1818;

moneyAmountElement.addEventListener("input", () => {
    console.log(`Aktualna kwota: ${moneyAmountElement.value}`);
})

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let value1;
    let value2;
    let amount = +moneyAmountElement.value;
    let possessedCurrency = possessedCurrencyElement.value;
    let wantedCurrency = wantedCurrencyElement.value;

    switch (possessedCurrency) {
        case "pln":
            value1 = amount * plnRate
            break;
        case "eur":
            value1 = amount * eurRate
            break;
        case "usd":
            value1 = amount * usdRate
            break;
        case "gbp":
            value1 = amount * gbpRate
            break;
        case "chf":
            value1 = amount * chfRate
            break;

    }
    switch (wantedCurrency) {
        case "pln":
            value2 = value1 / plnRate
            break;
        case "eur":
            value2 = value1 / eurRate
            break;
        case "usd":
            value2 = value1 / usdRate
            break;
        case "gbp":
            value2 = value1 / gbpRate
            break;
        case "chf":
            value2 = value1 / chfRate
            break;
    }
    amountRecivedElement.value = value2.toFixed(2)
    let value3 = amount / value2;
    currencyRateElement.value = value3.toFixed(4)
})

