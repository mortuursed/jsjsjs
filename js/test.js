// Створити стрілкову функцію hello1(), яка при визові буде вертати текст “Привіт Jaconst
// const hello = (text) => text

// console.log(hello("helloworld"));


// Напиши стрілкову функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:

// const avarage = [5,3,2,4,2,1,4,5,5,5,55,5]

// const  myAverageScore = (array) => {
//     let total = 0
//     for(const el of array){
//         total += el 
//     }
//     return Math.round(total / array.length) 
// }


// console.log(myAverageScore(avarage));

// const mun = 15

// let sum = 0

// for(let i = 1; i <= mun; i +=1){
//     sum +=1
//    console.log(sum); 
//  }

// function add(a,b){
//     console.log();
//     return(a-b)
// }

// console.log(add(10,5));


// function add(a,b,c){
//     return(`сумма чисел ${a}+${b}+${c}=${a+b+c}`)
// }

// console.log(add(10,5,7));

// const num = 25

// let sum = 0

// for(let i = 1; i <= 25; i +=1){
//     sum +=1
//     console.log(sum);
    
// }
// const name = "oleg"


// const hello = (name) =>{
//     return `what` + name
// }

// console.log();

// let an = prompt("ваше имя")
//  let age = prompt("ваш возраст")

// const checkAge = age => "Вам " + age + " лет";


// const checkName = name => "Ваше имя " + name;
// console.log(checkName(an));
// console.log(checkAge(age));


// Створіть функцію, яка рахує, скільки елементів масиву відповідають певній умові, використовуючи колбек-функцію для перевірки.



// Створіть функцію countItems(array, condition)
// Створіть змінну count = 0
// Пройдіться по масиву циклом for...of
// Для кожного елемента викличте condition(element)
// Якщо condition повертає true, збільште count на 1
// Поверніть кінцевий результат

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// Функція countItems тут

const countItems = (array, condition) => {
   let count = 0;
for(let i = 0; i < array.length; i +=1){
    if(condition(array[i])){
        count +=1
    }  
}
return count
}

// Умови для перевірки:
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));


// Створіть універсальний калькулятор, який може виконувати різні математичні операції залежно від переданої колбек-функції.



// Створіть стрілкову функцію calculate(a, b, operation)
// Функція повинна викликати operation(a, b) та повернути результат
// Створіть 4 стрілкові функції для операцій: add, subtract, multiply, divide
// У функції divide додайте перевірку на ділення на нуль
// Протестуйте всі операції

// Функція calculate тут
function calculate(a,b,operation){
    return operation(a,b)
}
// Стрілкові функції для операцій тут
const add = (a,b) => a + b
const subtract = (a,b) => a - b
const multiply = (a,b) => a * b
const divide = (a,b) => {
    if(b === 0 || a === 0){
        return "невозможно"
    }
    else{
        return a / b
    }
}
// Тестування
console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку



// Створіть функцію, яка повторює певну дію задану кількість разів, використовуючи колбек-функцію для генерації повідомлень.

// Створіть функцію repeatMessage(times, messageCreator)
// Створіть цикл for від i = 0 до i < times
// На кожній ітерації викликайте messageCreator(i)
// Протестуйте з різними колбеками




function repeatMessage(times, messageCreator){
    for(let i = 0; i < times; i += 1){
        messageCreator(i)
    }
}


// ==========================================
// 2. Тестування з різними колбеками
// ==========================================

// Тест 1: Просте логування з індексом ітерації
console.log("--- Тест 1: Звичайний лічильник ---");
const simpleLog = (index) => {
  console.log(`Повідомлення №${index + 1}`);
};

repeatMessage(3, simpleLog);


// Тест 2: Генерація повідомлення для кроків у грі
console.log("\n--- Тест 2: Ігровий лог ---");
const gameStepLog = (step) => {
  const messages = [
    "Гравець з'явився на карті.",
    "Гравець знайшов меч.",
    "Гравець переміг монстра.",
    "Гравець знайшов вихід з підземелля."
  ];
  // Якщо ітерацій більше, ніж елементів у масиві, використовуємо дефолтне значення
  console.log(`Крок ${step}: ${messages[step] || "Нічого не відбувається."}`);
};

repeatMessage(4, gameStepLog);


// Тест 3: Форматування парних та непарних рядків
console.log("\n--- Тест 3: Парні та непарні ітерації ---");
repeatMessage(5, (i) => {
  if (i % 2 === 0) {
    console.log(`[✔] Парний індекс: ${i}`);
  } else {
    console.log(`[❌] Непарний індекс: ${i}`);
  }
});