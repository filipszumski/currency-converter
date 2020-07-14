{
    const welcome = () => {
        console.log("Hello World");
    }

    const displayAmountInConsole = (moneyAmountElement) => {
        console.log(`Aktualna kwota: ${moneyAmountElement.value}`);
    }

    const calculatePossessedCurrencyAmount = (possessedCurrency, amount) => {
        const plnRate = 1;
        const eurRate = 4.4660;
        const usdRate = 3.9806;
        const gbpRate = 4.8851;
        const chfRate = 4.1818;

        switch (possessedCurrency) {
            case "pln":
                return amount * plnRate

            case "eur":
                return amount * eurRate

            case "usd":
                return amount * usdRate

            case "gbp":
                return amount * gbpRate

            case "chf":
                return amount * chfRate
        }
    }

    const calculateWantedCurrencyAmount = (wantedCurrency, result) => {
        const plnRate = 1;
        const eurRate = 4.4660;
        const usdRate = 3.9806;
        const gbpRate = 4.8851;
        const chfRate = 4.1818;

        switch (wantedCurrency) {
            case "pln":
                return result / plnRate

            case "eur":
                return result / eurRate

            case "usd":
                return result / usdRate

            case "gbp":
                return result / gbpRate

            case "chf":
                return result / chfRate
        }
    }

    const displayResult = (result1) => {

        const amountRecivedElement = document.querySelector(".js-amountRecived");

        amountRecivedElement.value = result1.toFixed(2);
    }

    const displaycurrencyIndex = (amount, result1) => {

        const CurrencyIndexElement = document.querySelector(".js-currencyRate");

        const currencyIndexValue = amount / result1;
        CurrencyIndexElement.value = currencyIndexValue.toFixed(2);
    }

    const onFormSubmit = (event, moneyAmountElement) => {
        event.preventDefault();

        const possessedCurrencyElement = document.querySelector(".js-possessedCurrency");
        const wantedCurrencyElement = document.querySelector(".js-wantedCurrency")


        const amount = +moneyAmountElement.value;
        const possessedCurrency = possessedCurrencyElement.value;
        const wantedCurrency = wantedCurrencyElement.value;

        const result = calculatePossessedCurrencyAmount(possessedCurrency, amount);
        const result1 = calculateWantedCurrencyAmount(wantedCurrency, result)

        displayResult(result1);
        displaycurrencyIndex(amount, result1)

    }

    const init = () => {
        welcome();

        const moneyAmountElement = document.querySelector(".js-moneyAmount")
        moneyAmountElement.addEventListener("input", () => displayAmountInConsole(moneyAmountElement))

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", () => onFormSubmit(event, moneyAmountElement))
    }
    init();
}