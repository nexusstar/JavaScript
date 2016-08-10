var myCoffee = {
    flavour: "espresso",
    temperature: "piping hot",
    ounces: 150,
    milk: true,

    reheat: function(){
        if(this.temperature === "cold"){
            this.temperature = "piping hot";
        }
    },

    blow: function(){
        if(this.temperature === "piping hot"){
            this.temperature = "cold";
        }
    }
};
