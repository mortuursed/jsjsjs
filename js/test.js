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

// const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// // Функція countItems тут

// const countItems = (array, condition) => {
//    let count = 0;
// for(let i = 0; i < array.length; i +=1){
//     if(condition(array[i])){
//         count +=1
//     }  
// }
// return count
// }

// // Умови для перевірки:
// const isEven = num => num % 2 === 0;
// const isLarge = num => num > 10;
// const isShort = word => word.length <= 3;

// // Тестування
// console.log('Парних чисел:', countItems(numbers, isEven));
// console.log('Чисел більше 10:', countItems(numbers, isLarge));
// console.log('Коротких слів:', countItems(words, isShort));


// Створіть універсальний калькулятор, який може виконувати різні математичні операції залежно від переданої колбек-функції.



// Створіть стрілкову функцію calculate(a, b, operation)
// Функція повинна викликати operation(a, b) та повернути результат
// Створіть 4 стрілкові функції для операцій: add, subtract, multiply, divide
// У функції divide додайте перевірку на ділення на нуль
// Протестуйте всі операції

// Функція calculate тут
// function calculate(a,b,operation){
//     return operation(a,b)
// }
// // Стрілкові функції для операцій тут
// const add = (a,b) => a + b
// const subtract = (a,b) => a - b
// const multiply = (a,b) => a * b
// const divide = (a,b) => {
//     if(b === 0 || a === 0){
//         return "невозможно"
//     }
//     else{
//         return a / b
//     }
// }
// // Тестування
// console.log(calculate(10, 5, add));      // Повинно показати 15
// console.log(calculate(10, 5, subtract)); // Повинно показати 5
// console.log(calculate(10, 5, multiply)); // Повинно показати 50
// console.log(calculate(10, 5, divide));   // Повинно показати 2
// console.log(calculate(10, 0, divide));   // Повинно показати помилку



// Створіть функцію, яка повторює певну дію задану кількість разів, використовуючи колбек-функцію для генерації повідомлень.

// Створіть функцію repeatMessage(times, messageCreator)
// Створіть цикл for від i = 0 до i < times
// На кожній ітерації викликайте messageCreator(i)
// Протестуйте з різними колбеками




// function repeatMessage(times, messageCreator){
//     for(let i = 0; i < times; i += 1){
//         messageCreator(i)
//     }
// }


// ==========================================
// 2. Тестування з різними колбеками
// ==========================================

// Тест 1: Просте логування з індексом ітерації
// console.log("--- Тест 1: Звичайний лічильник ---");
// const simpleLog = (index) => {
//   console.log(`Повідомлення №${index + 1}`);
// };

// repeatMessage(3, simpleLog);


// // Тест 2: Генерація повідомлення для кроків у грі
// console.log("\n--- Тест 2: Ігровий лог ---");
// const gameStepLog = (step) => {
//   const messages = [
//     "Гравець з'явився на карті.",
//     "Гравець знайшов меч.",
//     "Гравець переміг монстра.",
//     "Гравець знайшов вихід з підземелля."
//   ];
//   // Якщо ітерацій більше, ніж елементів у масиві, використовуємо дефолтне значення
//   console.log(`Крок ${step}: ${messages[step] || "Нічого не відбувається."}`);
// };

// repeatMessage(4, gameStepLog);


// // Тест 3: Форматування парних та непарних рядків
// console.log("\n--- Тест 3: Парні та непарні ітерації ---");
// repeatMessage(5, (i) => {
//   if (i % 2 === 0) {
//     console.log(`[✔] Парний індекс: ${i}`);
//   } else {
//     console.log(`[❌] Непарний індекс: ${i}`);
//   }
// });


// Дано масив об’єктів
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];

//   function findFriendByName (array,name){
//     for(const i of array){
//       if(i.name === name ){
//         return `друга ${name} найдено`
//       }  
//       else {
//         return  `друга ${name} не найдено`
//       }
//     }  
//   } 



// // Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти 
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));


// Напиши скрипт, який, для об'єкта user, послідовно:



// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

// Створіть масив об'єктів "products", де кожен об'єкт буде містити властивості "name", "price", "category" та "stock". Напишіть функцію, яка приймає масив об'єктів "products" і повертає загальну вартість товарів в наявності за вибраною категорією.


// const products = [
//   { name: "Ноутбук", price: 35000, category: "Електроніка", stock: 5 },
//   { name: "Смартфон", price: 20000, category: "Електроніка", stock: 8 },
//   { name: "Навушники", price: 3000, category: "Електроніка", stock: 12 },
//   { name: "Стілець", price: 2500, category: "Меблі", stock: 10 },
//   { name: "Стіл", price: 6000, category: "Меблі", stock: 3 },
//   { name: "Шафа", price: 12000, category: "Меблі", stock: 2 },
//   { name: "Футболка", price: 800, category: "Одяг", stock: 20 },
//   { name: "Джинси", price: 1800, category: "Одяг", stock: 15 }
// ];

// function collect(array,catg){
//     let total = 0;

//     for(const item  of array ){
//         if (item.stock > 0 && item.category === catg) {
//             total += item.stock * item.price
//         }
//     }    
// return total
// }

// console.log(collect(products,"Меблі"));
// console.log(collect(products,"Електроніка"));


// // Створіть функцію "getObjectLength", яка приймає об'єкт як параметр і повертає кількість його властивостей.

// const op = {
//     name:"olga",
//     location:"kharkov",
//     studen:true,
//     mum:false,
// }

// // function getObjectLength(array){
// //     const list = Object.keys(array)   
// //     console.log(list);
// //     return list.length
// // }

// // console.log(getObjectLength(op));

// function getObjectLength(array){
//    let total = 0 
//    for(const count in array){
//     total +=1
//    }  
//    return total
// }

// console.log(getObjectLength(op));


// // Створіть масив об'єктів "movies", де кожен об'єкт буде містити властивості "title", "director", "year" та "genre". Напишіть функцію, яка приймає масив об'єктів "movies" та жанр (строку) як параметри, та повертає масив фільмів, які належать до цього жанру.


// const movies = [
//   { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Sci-Fi" },
//   { title: "Interstellar", director: "Christopher Nolan", year: 2014, genre: "Sci-Fi" },
//   { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, genre: "Action" },
//   { title: "Titanic", director: "James Cameron", year: 1997, genre: "Romance" },
//   { title: "Avatar", director: "James Cameron", year: 2009, genre: "Sci-Fi" },
//   { title: "The Notebook", director: "Nick Cassavetes", year: 2004, genre: "Romance" }
// ];

// function movieGenre (array,text){
//     let newMovie = []
// for(const movie of array){
//     if (movie.genre === text) {
//         newMovie.push(movie)
    
//     }
// }
// return newMovie
// }

// console.log(movieGenre(movies,"Romance"))



// // Написати функцію яка буде повертати об’єкт масивів  імен друзів які офлайн та онлайн. Створити 2 масива онлайн і офлайн,  якщо тру - в перший, якщо ні - в другий

// const friends = [
//   { name: "Ivan", online: true },
//   { name: "Oleh", online: false },
//   { name: "Maria", online: true },
//   { name: "Anna", online: false },
//   { name: "Petro", online: true }
// ];


// const getFriendsByStatus = function (array) {
//      const friendByStat = {
//     onlineFriends: [],
//     offlineFriends: [],
//   }

//   for(const item of array){   
//     if (item.online) {
//        friendByStat.onlineFriends.push(item.name)
//     }
//     else{ 
//         friendByStat.offlineFriends.push(item.name)
//     }
//   }
//   return friendByStat
// };
 
//   console.log(getFriendsByStatus(friends));

// const titleEl = document.querySelector("h1")
// console.log(titleEl);

// titleEl.textContent

// console.log(titleEl.textContent);

// titleEl.textContent = "hello world"


// const inputEl = document.querySelector("input")

// inputEl.checked = true


// const listEl = document.querySelector(".list")

// console.log(listEl.previousElementSibling);

// const itemEl = document.querySelectorAll("li")

// itemEl.forEach(element => {
//   console.log(element.firstElementChild.textContent); 
// });


// const itemli = document.querySelector("h2")

// console.log(itemli);

// const imgEl = document.querySelector("img")

// imgEl.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Blue_sky%2C_white-gray_clouds.JPG/1280px-Blue_sky%2C_white-gray_clouds.JPG"

// console.log(imgEl);

// imgEl.alt = "природа"

// const buttonEl = document.querySelector("[type='button']")

// buttonEl.style.backgroundColor = "red"

// buttonEl.style.color = "white"

// buttonEl.style.border = "none"

// buttonEl.style.padding = '20px 40px'

// buttonEl.style.borderRadius = "20px"

// buttonEl.style.fontSize = '20px'

// console.log(buttonEl);

// const linkEl = document.querySelector("#qwer")

// console.log(linkEl);

// const linkHref = document.getElementById("qwer")

// console.log(linkHref);


// работа с класс лист==============================================================================================


// const textEl = document.querySelector(".test")

// textEl.classList.add("title")

// textEl.classList.remove("desk")

// textEl.classList.replace("title",'caption')


// console.log(textEl.classList.contains("desk"));

// const  button = document.querySelector(".supbutton")

// button.addEventListener("click",() => {
//     textEl.classList.toggle("ection")
// })

// Отримайте доступ до списку
// Додайте жовтий колір фону 
// Додайте клас "site-nav__link" до першого посилання
// Збільшіть розмір шрифта посилання з атрибутом 

// const linkEl = document.querySelector(".site-nav")

// linkEl.classList.add("newColor")

// const firstLinkEl = document.querySelector(".site-nav__item > a" )

// console.log(firstLinkEl);


// firstLinkEl.classList.add("site-nav__link")

// Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.


// Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями

const listEl = document.querySelector("[name = 'list']")

// console.log(listEl);


listEl.style.color = "red"

const supListEl = document.querySelector("ul")

const children = supListEl.children;

console.log(children);









