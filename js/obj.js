// const name = "oleg"

// const userAge = "age"





// const userName = {
// name,
// [userAge]:19,
// isStudent:true,
// frends:["ina","vania","lena",],
// points:[12,32,12,32,43],
// location:{
//    country:"Germany",
//    city:"hannover",
//    str:"karl-krosche-str",
//    haus:"Nr 4",
//    aparnmet:120,
// },
// showCountfriends(){
//     console.log(this.frends.length);
// },
// showAvarragyPoint(){
// let total = 0
// for(const num of this.points){
//     total += num
// }
// const res = Math.round(total / this.points.length)
// return `средний балл учня с именнем ${this.name} становить ${res}`
// },
// getPoints(newPoints){
//     this.points.push(newPoints)

// }
// }
// userName.getPoints(123)
// userName.getPoints(13)

// console.log(userName.showAvarragyPoint());


// console.log(userName.name);
// console.log(userName.frends[1]);
// console.log(userName.points);
// console.log(userName.location.haus);
// console.log(userName['age']);
// userName.lastName='ivaniov'
// userName.age = 50
// console.log(userName);
// userName.showCountfriends()


// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку.


// const bankAccount = {
//  ownerName:"Alfa", 
//  accountNumber:21312442334, 
//  balance:12343,
//  deposit(){
//     if(confirm("желаете пополнить счет?")){
//         const money = Number(prompt("введите сумму полнения"))
//     this.balance +=money
//     return `на рахунку ${this.balance} грошей`
//     }   
//  },
// withdraw(){
//     if(confirm("сколько желаете списаться?")){
//         const delMoney = Number(prompt("умма вывода"))
//     if(this.balance > delMoney){
//         this.balance - delMoney
//         return `на рахунку ${this.balance} грошей`
//     }  
// }  
// }
// }

// console.log(bankAccount.deposit());
// console.log(bankAccount.withdraw());


// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки


// const weather = {
//     temperature:17,
//     humidity:"dirty",
//     windSpeed:5,

//     Frozen: function(){
//         if(this.temperature > 0){
//             return true
//         }
//         else{
//             return false
//         }
//     }   
// }

// let temp = Number(prompt("введите градусы"));

// weather.temperature = temp

// if (weather.Frozen()) {
//   alert("Температура выше 0 ");
// } else {
//   alert("Температура ниже или ровна 0 ");
// }


// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 

// const movie = {
//     title: "Inception",
//     director: "Nolan",
//     year: 2010,
//     rating: 8.8,

//     highlyRated: function() {
//         return this.rating > 8;
//     }
// };

// console.log("name:", movie.title);
// console.log("director:", movie.director);
// console.log("year:", movie.year);
// console.log("rating:", movie.rating);


// console.log("Рейтинг выше 8?:", movie.highlyRated());

// ==============================================================================

    // Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.


//     const person = {
//         name:'oleg',
//         age:19,
//         gender:"male",
//         showPerson(){
//             console.log(this.name,this.age,this.gender,);            
//         }
//     }
    
//     console.log(person.showPerson());
    

// // Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.



// const studen = [
//     {name:"vova", age:19, gender:"male", grade:32},
//     {name:"lena", age:21, gender:"famele", grade:38},
//     {name:'ivan', age:17, gender:"male", grade:34},  
// ]
// function getAvarage (array){
// let total = 0;
//  for(let i = 0; i < array.length ; i += 1){
// total += array[i].grade
//  }
//  return Math.round(total / array.length)
// }

//  console.log(getAvarage(studen));
 

// //  Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.

// let book = {
// title:"moda",
// author:"shiren",
// year:2001,
// genre:'romance',
// update(proparty,walle){
//     this[proparty] = walle
// }
// }

// book.update("title","sera")
// book.update("author","vova")
// console.log(book);



// const user = {
//   name: "alex",
//   email: "alex@example.com",
//   password: "SecurePassword123",

//   login: function(enteredEmail, enteredPassword) {
//     if (enteredEmail === this.email && enteredPassword === this.password) {
//       console.log(`Вітаємо, ${this.name}.`);
//       return true;
//     } else {
//       console.log("Неправильний email или пароль.");
//       return false;
//     }
//   }
// };


// // Створіть об'єкт "restaurant" з властивостями "name", "cuisine", "address" та "rating". Додайте до об'єкту метод, який дозволить змінювати значення властивостей "address" та "rating"

//  const resta = {
//         name:'olip',
//         cuisine:"anna",
//         address:"tyta",
//         rating:5 ,   
//         up(newAddress,newRating){
//             this.address = newAddress
//             this.rating = newRating
//         }            
// }
// resta.up("address","tama")
// resta.up("rating","4")
// resta.up("name","tama")
// console.log(resta);

// =========================================================================================================

// const person = {
//   firstName: "Іван",
//   lastName: "Петренко",
//   age: 25,
//   city: "Київ",
//   country: "Україна",
//   email: "ivan.petrenko@gmail.com",
//   phone: "+380671234567",
//   profession: "Розробник",
//   isMarried: false,
//   hobbies: ["спорт", "читання", "подорожі"]
// };

// const mass = Object.keys(person)

// console.log(mass);


// for(const iter of mass){
//     console.log(person[iter]);
//     if(Array.isArray(person[iter])){
//         for(const msh of person[iter]){
//             console.log(msh);
            
//         }
//     } 
// }


// ====================================================================================

// const num = [12,14,40,32,456,21,4,23,43,45,22]

// console.log(Math.min(...num));


// function test (a,b,c){
//   console.log(a,b,c);  
// }
// const number = [1,2,3]

// test(...number)


// const name = ["oleg","anna","bob","ivan","jora"]

// const copyName = [...name]

// const copy = name.slice(0,2)

// console.log(copy);


// const objB = {
//   d:20,
//   e:30,
//   a:100,
// }

// const obj = Object.assign({},objA,objB)

// console.log(obj);


// const ObjRes = {...objA,...objB,}

// console.log(ObjRes);

// const objA = {
//   a:5, 
//   b:10,
//   c:15,
// }  

// const res = {...objA}

// res.a = 1000

// console.log(res);

// console.log(objA);

// const a = 5
// let b  = a
// b = 10

// console.log(a);
// console.log(b);



