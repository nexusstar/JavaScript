var Book = function(name, price){
    var priceChanged = [], priceAlter = [];
    this.name = function(val){
        return name;
    };
    this.price = function(val){
        if(val !== undefined && val !== price){
            for (var i = 0; i < priceChanged.length; i++){
                if(!priceAlter[i](this, val)){
                    return price;
                }
            }
            price = val;
            for(var i = 0; i < priceChanged.length; i++){
                priceChanged[i](this);
            }
        }
        return price;
    };
    this.onPriceAlter = function(callback){
        priceAlter.push(callback);
    };
    this.onPriceChanged = function(callback){
        priceChanged.push(callback);
    };
};

var book = new Book('The Graveyard book', 24.01);
console.log('The name is: ' + book.name());
console.log('The price is: ' + book.price());

book.onPriceAlter(function (b, price){
    if (price > 100) {
        console.log('System error, price is high');
        return false;
    }
    return true;
});

book.onPriceChanged(function(b){
    console.log('The book price has changed to: ' + b.price());
});

book.price(20.00);
book.price(200);
