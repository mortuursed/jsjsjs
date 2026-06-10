
// const userage = "19";

// console.log(userage);

// const name = "rostislav"

// console.log(name);

// const isStuden = true

// console.log(isStuden);


// const isString = "биба и боба"

// console.log(isString);

// const myNull = null

// console.log(myNull);


// const userName = prompt("Введите имя");

// alert("ваше имя: " + userName);

// console.log(typeof userName);

// const isConfirmed = confirm("хотите продолжить");

// alert("осторожно!");


// Створити змінні celsius, fahrenheit для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
// Створити змінну daysInMonth для зберігання кількості днів у місяці. Обчислити кількість hoursInMonth годин та minutesInMonth хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
// Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
// Створити змінну totalPrice для зберігання суми покупки в магазині. Застосувати знижку discount в розмірі 10% до цієї суми за допомогою оператора множення. Результат зберегти в змінній discountedPrice та вивести результат в консоль.
// Створити змінну const floatNumber = 12.78 для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого. Результат зберегти в змінній roundedDown та вивести результат в консоль.
// Створити змінну const floatString = "45.67"  для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число. Результат зберегти в змінній parsedFloat та вивести результат в консоль.
// Створити змінну const intString = "123" для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній parsedIntта вивести результат в консоль.
// Створити змінну number для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа. Результат зберегти в змінній sqrtNumber та вивести результат в консоль.
// Створити змінні const integer = 42 та const stringNumber = "256" для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній convertedInt та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок. Результат зберегти в змінній convertedString та вивести результат в консоль.


// let celsius = 25

// let fahrenheit = (celsius*1.8)+32

// console.log(fahrenheit);




// let daysInMonth = 30

// let hours = daysInMonth*24

// let min =hours*60

// console.log(hours);

// console.log(min);




// let hp = 100

// let energy = 100

// console.log("health",hp-25);

// console.log("Stamin",energy-29);

// const floatNumber =12.78

// let roundedDown=Math.floor(floatNumber);

// console.log(roundedDown);



// let totalPrice = 500;

// let discount = 0.1;

// let discountedPrice = totalPrice*(1 - discount);

// console.log(discountedPrice);



// const floatString = "45.67";

// let parsedFloat = parseFloat(floatString);

// console.log(parsedFloat);

// const intString = "123";

// let parsedInt = parseInt(intString);

// console.log(parsedInt);




// let number = 64;

// let sqrtNumber = Math.sqrt(number);

// console.log(sqrtNumber);




// const integer = 42;

// const stringNumber = "256";

// let convertedInt = parseInt(stringNumber);

// console.log(convertedInt);

// let convertedString = integer.toString();

// console.log(convertedString);




// const result = 5 + 5 + '5';
// console.log(result);
// console.log(typeof result);

// const email = "example@gmail.com";
// const atSymbol = email.includes('@');
// const emailLength = email.length;

// console.log(atSymbol);
// console.log(emailLength);

// const wordOne = "My";
// const wordTwo = "name";
// const wordThree = "is";

// let fullName = `${wordOne} ${wordTwo} ${wordThree}`;
// fullName += " Viktor"

// console.log(fullName);


// const userName = "Олександро";
// const payment = 300;

// alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);



// const array = [10, 25, 13, 44, 15];//[10,25,13,44,15,30]
// array[5] = 30;
// console.log(array);

// Порахувати загальну суму покупок в корзині
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

//  const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
//  let total = 0;


//  for(let i = 0; i < cart.length; i +=1) {
//     total += cart[i];
//  } 

//    console.log(total);


// Написати скрипт який порахує сумму всіх парних чисел в масиві
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;


// for(let i = 0 ; i < numbers.length; i +=1){
//     if(numbers[i] %2 !==0){
//         continue
//     }    
//     total += numbers[i] 
// }

// console.log(total);


// Напиши скрипт пошуку самого маленького числа в масиві,  при умові, що числа унікальні (не повторюються).
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0] ;

// for(let i = 0; i < numbers.length; i +=1){

//     if(smallestNumber > numbers[i]){
//         smallestNumber = numbers[i]
//     }
// }

// console.log(smallestNumber);

// ===========================================================

// const num = 10;

// let sum = 0;

// for(let i = 0; i <= num; i += 1){
// sum +=1;
// console.log(i);
// }






