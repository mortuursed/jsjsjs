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


const bankAccount = {
 ownerName:"Alfa", 
 accountNumber:21312442334, 
 balance:12343,
 deposit(){
    if(confirm("желаете пополнить счет?")){
        const money = Number(prompt("введите сумму полнения"))
    this.balance +=money
    return `на рахунку ${this.balance} грошей`
    }   
 },
withdraw(){
    if(confirm("сколько желаете списаться?")){
        const delMoney = Number(prompt("умма вывода"))
    if(this.balance > delMoney){
        this.balance - delMoney
        return `на рахунку ${this.balance} грошей`
    }  
}  
}
}

console.log(bankAccount.deposit());
console.log(bankAccount.withdraw());





// ==============================================================================

    // Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.


    // const person = {
    //     name:'oleg',
    //     age:19,
    //     gender:"male",
    //     showPerson(){
    //         console.log(this.name,this.age,this.gender,);            
    //     }
    // }
    
    // console.log(person.showPerson());
    

// Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.



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
 

//  Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.

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


// Створіть об'єкт "restaurant" з властивостями "name", "cuisine", "address" та "rating". Додайте до об'єкту метод, який дозволить змінювати значення властивостей "address" та "rating"

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
