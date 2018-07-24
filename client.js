class Pizza{
    constructor(toppings = ['cheese']){
        this.toppings = toppings; 
        this.price = 10;
    }

    calculateCost(){
        return this.price = this.price + (.99 * (this.toppings.length-1));
    }
}

class Order{
    constructor(food = []){
    this.food = food;
    this.total = 0;
    this.qualifyForDiscount1 = 0;
    this.qualifyForDiscount2 = 0;
    this.indexOf = 0;
    this.hasDiscount = 0;
    }
    
    calculateOrderCost(){
        for (let i = 0; i < this.food.length; i++) {
            if (this.food[i].size === 'large') {
                this.qualifyForDiscount1 ++
                console.log(this.qualifyForDiscount1);
            }
            else if (this.food[i].size === 'medium') {
                this.qualifyForDiscount2 ++
                this.indexOf = i;
                console.log(this.qualifyForDiscount2, this.indexOf);
                
            }
            if (this.qualifyForDiscount1 >= 2 && this.qualifyForDiscount2 >=1 && this.hasDiscount === 0 ) {
                this.total += this.food[i].calculateCost()
                console.log(this.total);
                this.total -= this.food[this.indexOf].calculateCost();
                this.total += (this.food[this.indexOf].calculateCost()*.5);
                console.log('gives discount', this.total);
            }
            else{
                this.total += this.food[i].calculateCost()
            }
        }
        return this.total;
    }
}

class SmallPizza extends Pizza{
    constructor(toppings){
        super(toppings)
        this.basePrice = 8.99;
        this.size = 'small';
    }
}

class MediumPizza extends Pizza{
    constructor(toppings){
        super(toppings)
        this.basePrice = 10.99;
        this.size = 'medium';
    }
}

class LargePizza extends Pizza{
    constructor(toppings){
        super(toppings)
        this.basePrice = 12.99;
        this.size = 'large';
    }
}


let largePepperoniPizza = new LargePizza(['cheese'])
let mediumPepperoniPizza = new MediumPizza(['cheese'])
let pepperoniPizza = new Pizza(['cheese', 'pepperoni']);
let meatLoversPizza = new Pizza(['cheese', 'pepperoni', 'sausage']);
let newOrder = new Order ([largePepperoniPizza, largePepperoniPizza, mediumPepperoniPizza]);



console.log(newOrder.calculateOrderCost());

