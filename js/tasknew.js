// Завдання 1



// Напиши скрипт, який, для об'єкта user, послідовно:



// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of


// const user = {
// hobby:"football",
// premium:true
// }

// user.mood = "happy"

// user.hobby = "skydivivng"


//  user.premium = false

//  const kasse = Object.keys(user)
 
// for(const i of kasse){
//     console.log(i,user[i]);  
// }
 

// // Завдання 2



// // Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
// const user1 = {
// hobby:"football",
// premium:true,
// bob:"bob"
// }

// function  countProps(obj){
//     const key = Object.keys(obj)
// return key.length
// }

// console.log(countProps(user1));


// // Завдання 3



// // Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
// const user2 = {
// oleg:12,
// anna:34,
// bob:132,
// olga:22,
// joke:26
// }

// function findBestEmployee(employees){
//     let userName = ""
//     let task = 0
//     const entry = Object.entries(employees)
//     for(const item of entry){
//         if(task < item[1]){
//             task = item[1]
//             userName = item[0]
//         }
//     }   

//     return `имя самого продуктивного ${userName} выполнил ${task} задач`
// }

// console.log(findBestEmployee(user2));



// // Завдання 4



// // Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".


// const user3 = {
// oleg:12,
// anna:34,
// bob:132,
// olga:22,
// joke:26
// }

// function countTotalSalary(employees){
//     let total = 0
//     const valle = Object.values(employees)
//     for(const i of valle){
//         total += i
//     }
//     return total
// }

// console.log(countTotalSalary(user3));

// // Завдання 5



// // Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

// // Завдання 6

// const user5 = [
//   {
//     id: 1,
//     name: "Алексей",
//     age: 28,
//     isActive: true,
//     skills: ["JavaScript", "React"]
//   },
//   {
//     id: 2,
//     name: "Елена",
//     age: 34,
//     isActive: false,
//     skills: ["Node.js", "MongoDB", "Docker"]
//   },
//   {
//     id: 3,
//     name: "Иван",
//     age: 22,
//     isActive: true,
//     skills: ["HTML", "CSS", "Vue.js"]
//   }
// ];

// function getAllPropValues(arr, prop){
// let namesArr = []
// for(const i of arr){
//     namesArr.push(i[prop]);  
// }
// return namesArr
// }

// console.log(getAllPropValues(user5,"name"));
// console.log(getAllPropValues(user5,"skills"));
// console.log(getAllPropValues(user5,"age"));


// // Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// // Викличи функції для перевірки працездатності твоєї реалізації.

// const products = [
//   {
//     id: 1,
//     name: "Ноутбук Apple MacBook Air M2",
//     price: 45000,
//     category: "Електроніка",
//     inStock: true,
//     stock:2,
//   },
//   {
//     id: 2,
//     name: "Смартфон Samsung Galaxy S24",
//     price: 38000,
//     category: "Електроніка",
//     inStock: true,
//     stock:13,
//   },
//   {
//     id: 3,
//     name: "Бездротові навушники Sony WH-1000XM5",
//     price: 15000,
//     category: "Аудіо",
//     inStock: false,
//     stock:122,
//   },
//   {
//     id: 4,
//     name: "Механічна клавіатура Keychron K2",
//     price: 4200,
//     category: "Аксесуари",
//     inStock: true,
//     stock:142,
//   }
// ];

// function  calculateTotalPrice(allProdcuts, productName){
// for(const i of allProdcuts){
//     console.log(i.name);   
//     if(i.name === productName){
//         return i.price * i.stock
//     }
// }

// }


// console.log(calculateTotalPrice(products,"Бездротові навушники Sony WH-1000XM5"));



// Завдання 7 — додаткове, виконувати не обов'язково
// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

const users = [

  {

    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',

    name: 'Moore Hensley',

    email: 'moorehensley@indexia.com',

    eyeColor: 'blue',

    friends: ['Sharron Pace'],

    isActive: false,

    balance: 2811,

    skills: ['ipsum', 'lorem'],

    gender: 'male',

    age: 37,

  },

  {

    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',

    name: 'Sharlene Bush',

    email: 'sharlenebush@tubesys.com',

    eyeColor: 'blue',

    friends: ['Briana Decker', 'Sharron Pace'],

    isActive: true,

    balance: 3821,

    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],

    gender: 'female',

    age: 34,

  },

  {

    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',

    name: 'Ross Vazquez',

    email: 'rossvazquez@xinware.com',

    eyeColor: 'green',

    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],

    isActive: false,

    balance: 3793,

    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],

    gender: 'male',

    age: 24,

  },

  {

    id: '249b6175-5c30-44c6-b154-f120923736f5',

    name: 'Elma Head',

    email: 'elmahead@omatom.com',

    eyeColor: 'green',

    friends: ['Goldie Gentry', 'Aisha Tran'],

    isActive: true,

    balance: 2278,

    skills: ['adipisicing', 'irure', 'velit'],

    gender: 'female',

    age: 21,

  },

  {

    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',

    name: 'Carey Barr',

    email: 'careybarr@nurali.com',

    eyeColor: 'blue',

    friends: ['Jordan Sampson', 'Eddie Strong'],

    isActive: true,

    balance: 3951,

    skills: ['ex', 'culpa', 'nostrud'],

    gender: 'male',

    age: 27,

  },

  {

    id: '150b00fb-dd82-427d-9faf-2879ea87c695',

    name: 'Blackburn Dotson',

    email: 'blackburndotson@furnigeer.com',

    eyeColor: 'brown',

    friends: ['Jacklyn Lucas', 'Linda Chapman'],

    isActive: false,

    balance: 1498,

    skills: ['non', 'amet', 'ipsum'],

    gender: 'male',

    age: 38,

  },

  {

    id: 'e1bf46ab-7168-491e-925e-f01e21394812',

    name: 'Sheree Anthony',

    email: 'shereeanthony@kog.com',

    eyeColor: 'brown',

    friends: ['Goldie Gentry', 'Briana Decker'],

    isActive: true,

    balance: 2764,

    skills: ['lorem', 'veniam', 'culpa'],

    gender: 'female',

    age: 39,

  },

];


// Отримати масив імен всіх користувачів (поле name).

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));



// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color )


console.log(getUsersWithEyeColor(users, 'blue')); 



const getUsersWithGender = (users, gender) => users.filter(user => user.gender === "male").map(user => user.name);

console.log(getUsersWithGender(users));


// Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = users => users.filter(({isActive}) => !isActive )

// const getInactiveUsers = users => users.filter((active) => active.isActive)

// Отримати користувача (не масив) по email (поле email, він унікальний).

const getUserWithEmail = (users, email) => users.find((mail) => mail.email === email)


console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]


// Отримати загальну суму балансу (поле balance) всіх користувачів.

const calculateTotalBalance = users => users.reduce((acc,sum) => acc + sum.balance,0)


console.log(calculateTotalBalance(users)); // 20916

// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (users, friendName) => users.filter ((frind) => frind.friends.includes(friendName)).map((supname) => supname.name)

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = users => [...users].sort((a,b) => a.friends.length - b.friends.length  ).map((supname) => supname.name )
  

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = users => users.flatMap((mass) => mass.skills ).filter((item,index,arr) => arr.indexOf(item) === index).sort((a,b) => a.localeCompare(b))


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// const developers = [
//   
//     id: 1,
//     name: "Yurii",
//     age: 28,
//     experience: 5,
//     salary: 2500,
//     languages: ["JavaScript", "HTML", "CSS", "React"]
//   },
//   {
//     id: 2,
//     name: "Olena",
//     age: 31,
//     experience: 8,
//     salary: 3800,
//     languages: ["Python", "Django", "JavaScript"]
//   },
//   {
//     id: 3,
//     name: "Andrii",
//     age: 24,
//     experience: 2,
//     salary: 1600,
//     languages: ["Java", "Spring", "SQL"]
//   },
//   {
//     id: 4,
//     name: "Iryna",
//     age: 27,
//     experience: 4,
//     salary: 2200,
//     languages: ["JavaScript", "Vue", "CSS"]
//   },
//   {
//     id: 5,
//     name: "Taras",
//     age: 35,
//     experience: 10,
//     salary: 5000,
//     languages: ["C#", ".NET", "SQL"]
//   },
//   {
//     id: 6,
//     name: "Maksym",
//     age: 29,
//     experience: 6,
//     salary: 3200,
//     languages: ["Python", "JavaScript", "React"]
//   },
//   {
//     id: 7,
//     name: "Sofiia",
//     age: 26,
//     experience: 3,
//     salary: 1900,
//     languages: ["PHP", "Laravel", "JavaScript"]
//   },
//   {
//     id: 8,
//     name: "Dmytro",
//     age: 33,
//     experience: 9,
//     salary: 4500,
//     languages: ["Go", "Docker", "Kubernetes"]
//   },
//   {
//     id: 9,
//     name: "Kateryna",
//     age: 30,
//     experience: 7,
//     salary: 3600,
//     languages: ["Python", "React", "TypeScript"]
//   },
//   {
//     id: 10,
//     name: "Oleh",
//     age: 33,
//     experience: 1,
//     salary: 1200,
//     languages: ["JavaScript", "HTML", "CSS"]
//   }
// ];


// developers.push({
//     id: 10,
//     name: "Oldh",
//     age: 54,
//     experience: 3,
//     salary: 1240,
//     languages: ["JavaScript", "HTML", "CSS"]
//   })

// const findAge = developers.reduce((acc,{age},index,array) => acc + age / array.length ,0)

// console.log(findAge);


// const go = [
//   11,33,4,44,35,1,21,43,7,8,90,9
// ] 

// const sor = [...go].sort((a,b) => b - a )

// console.log(sor);

// console.log(go);


// const names = ["Алексей", "Мария", "Иван", "Елена", "Дмитрий"];

// const sortetName = [...names].sort((a,b) => a.localeCompare(b)) 

// console.log(sortetName);


// const developers = [
//   {
//     id: 1,
//     name: "Yurii",
//     age: 28,
//     experience: 5,
//     salary: 2500,
//     languages: ["JavaScript", "HTML", "CSS", "React"]
//   },
//   {
//     id: 2,
//     name: "Olena",
//     age: 31,
//     experience: 8,
//     salary: 3800,
//     languages: ["Python", "Django", "JavaScript"]
//   },
//   {
//     id: 3,
//     name: "Andrii",
//     age: 24,
//     experience: 2,
//     salary: 1600,
//     languages: ["Java", "Spring", "SQL"]
//   },
//   {
//     id: 4,
//     name: "Iryna",
//     age: 27,
//     experience: 4,
//     salary: 2200,
//     languages: ["JavaScript", "Vue", "CSS"]
//   },
//   {
//     id: 5,
//     name: "Taras",
//     age: 35,
//     experience: 10,
//     salary: 5000,
//     languages: ["C#", ".NET", "SQL"]
//   },
//   {
//     id: 6,
//     name: "Maksym",
//     age: 29,
//     experience: 6,
//     salary: 3200,
//     languages: ["Python", "JavaScript", "React"]
//   },
//   {
//     id: 7,
//     name: "Sofiia",
//     age: 26,
//     experience: 3,
//     salary: 1900,
//     languages: ["PHP", "Laravel", "JavaScript"]
//   },
//   {
//     id: 8,
//     name: "Dmytro",
//     age: 33,
//     experience: 9,
//     salary: 4500,
//     languages: ["Go", "Docker", "Kubernetes"]
//   },
//   {
//     id: 9,
//     name: "Kateryna",
//     age: 30,
//     experience: 7,
//     salary: 3600,
//     languages: ["Python", "React", "TypeScript"]
//   },
//   {
//     id: 10,
//     name: "Oleh",
//     age: 33,
//     experience: 1,
//     salary: 1200,
//     languages: ["JavaScript", "HTML", "CSS"]
//   }
// ];


// const findName = developers.map((names) => names.name).sort((a,b) => a.localeCompare(b) )


// console.log(findName);

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'html','nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html','html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];


// const sumLike = tweets.reduce((acc,like) => {
// return acc + like.likes
// },0)

// console.log(sumLike);


// const suplike = tweets.filter((more) => more.likes > 5 ).flatMap((supTag) => supTag.tags).filter((item,index,array) => array.indexOf(item) === index )

// console.log(suplike);


// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];


// const time = players.reduce((acc,elemet) => acc + elemet.timePlayed ,0)

// const suptime = [...players].sort((a,b) => a.timePlayed - b.timePlayed )

// console.log(time);

// console.log(suptime);

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];


// const total = cart.reduce((acc,elemet) => acc + elemet.price * elemet.quantity ,0)


// console.log(total);


// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];


// const stat =tweets.flatMap((block) => block.tags ).reduce((acc,item) => {
//   if(acc[item] ){
//     acc[item] +=1
//   }else{
//     acc[item] = 1
//   }

//   return acc
// } ,{})

// console.log(stat);


// Зробити статистику всіх тегів. Назву тега потрібно зробити ключем, значення якого буде кількістьповторень тегів в масиві. Якщо властивість з ключем tag є, збільшуємо його значення на 1 якщо властивості немає с таким ключем що в tag, створити і записати 1