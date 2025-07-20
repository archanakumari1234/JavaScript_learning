function myCar(color,price,brand,year) {
    this.color = color,
    this.brand = brand,
    this.price = price,
    this.purchaseYear = year
}
let car1 = new myCar('blue', 400000, "suzuki", 2020)
let car2 = new myCar('red', 500000, "audi", 2022)
let car3 = new myCar('yellow', 4000000, "range rover", 2024)
console.log(car1,car2,car3);
