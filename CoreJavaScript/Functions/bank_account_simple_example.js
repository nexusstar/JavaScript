const SPENDING_TRESHOLD  = 210;
const TAX_RATE = 0.2;
const PHONE_PRICE = 199.99;
const ACCESORRY_PRICE = 9.99;


var bank_balance = 2000;
var amount = 0;

function calculateTax(amount){
    return amount * TAX_RATE;
}

function formatAmount(amount){
    return "$" + amount.toFixed(2);
}

// keep buying while you still have money
while (amount < bank_balance){
    //bay a new phone
    amount += PHONE_PRICE;

    // can we afford an accessory
    if ( amount < SPENDING_TRESHOLD){
        amount += ACCESORRY_PRICE;
    }

}

// don't forget to pay the government
amount = amount + calculateTax(amount);

console.log(
    "Your purchase " + formatAmount(amount)
);

// can you actually afford this purchase
if (amount > bank_balance){
    console.log(
        "You can't afford this purchase. :" + formatAmount(amount)
    );
}
