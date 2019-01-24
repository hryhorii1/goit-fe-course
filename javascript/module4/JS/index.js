'use strict';

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40
};

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
};

const Cashier = function (name = 'Cashier', productDatabase) {
    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = 0;

    this.getCustomerMoney = function (value) {
        return this.customerMoney += value;
    };
    
    this.countTotalPrice = function (order) {
        let total = 0;
        for (const key in order) {
            total = (order[key] * productDatabase[key]) + total;
        }
        return total;
    };
    this.countChange = function (totalPrice) {
        let sum = 0;

        if (this.customerMoney >= totalPrice) {
            sum = this.customerMoney - totalPrice;
            return sum;
        };
        if (this.customerMoney < totalPrice) {
            return null;
        };
    };
    this.onSuccess = function (change) {
        return `Дякуємо за покупку, ваша решта ${change}!`;
    };
    this.onError = function () {
        return `Дуже шкода, вам не вистачає коштів на покупки`;
    };
    this.reset = function () {
        return this.customerMoney = 0 + `сума коштів обнулена`;
    };
};

const mango = new Cashier('Mango', products);
const totalPrice = mango.countTotalPrice(order);

console.log(mango.name); // Mango
console.log(mango.productDatabase); // посилання на базу даних продуктів (об'єкт products)
console.log(mango.customerMoney); // 0
console.log(totalPrice); // 110
mango.getCustomerMoney(300);
console.log(mango.customerMoney); // 300
const change = mango.countChange(totalPrice);
console.log(change); // 190
const success = mango.onSuccess(change); // console.log(success)
const error = mango.onError(); // console.log(error)
const reset = mango.reset(); // console.log(reset)
if (change !== null) {
    // Під час успішного обслуговування, викликаємо метод onSuccess
    console.log(success); // дякуємо за покупку, ваша решта 190
} else {
    // Під час не вдалого обслуговування, викликаємо метод onError
    console.log(error); // Дуже шкода, вам не вистачає коштів на покупки
}