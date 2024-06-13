const input = require('sync-input');

console.log("Welcome to Currency Converter!");

const currencies = {
    "USD": 1.0,
    "JPY": 113.5,
    "EUR": 0.89,
    "RUB": 74.36,
    "GBP": 0.75
};

// Displaying the conversion rates
for (const [currency, rate] of Object.entries(currencies)) {
    console.log(`1 USD equals ${rate} ${currency}`);
}

function convertCurrencies() {
    console.log("What do you want to convert?");
    let from = input("From: > ").toUpperCase();

    if (!currencies.hasOwnProperty(from)) {
        console.log("Unknown currency");
        return;
    }

    let to = input("To: > ").toUpperCase();

    if (!currencies.hasOwnProperty(to)) {
        console.log("Unknown currency");
        return;
    }

    let amount = input("Amount: > ");
    if (isNaN(amount)) {
        console.log("The amount has to be a number");
        return;
    }

    amount = Number(amount);

    if (amount < 1) {
       console.log("The amount cannot be less than 1");
        return;
    }

    let result = (amount * (currencies[to] / currencies[from])).toFixed(4);
    console.log(`Result: ${amount} ${from} equals ${result} ${to}`);
}

while (true) {
    console.log("What do you want to do?");
    let choice = input("1-Convert currencies 2-Exit program\n> ");

    if (choice === "1") {
        convertCurrencies();
    } else if (choice === "2") {
        console.log("Have a nice day!");
        break;
    } else {
        console.log("Unknown input");
    }
}
