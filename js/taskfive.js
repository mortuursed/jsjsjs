// for (let i = 0; i <= 10; i += 1) {
//     console.log(i);
// }


// for (let i = 0; i <= 20; i += 1) 
//     if (i % 2 !== 0) {
//         continue
//     }

//     console.log(i);



//     const n = 3.14; 

// for (let i = 0; i <= 3.14; i += 1) {
//     if (i >= n) {
//         break;
//     }
// }



//     let i = 0;

// while (i <= 20) {
//     if (i % 3 === 0) {
//         i += 1
//         continue;
//     }

//     console.log(i)
//     i +=1
// }



// ==========================================================

//  const text =["mango","alex","poly","kiwi"]

// const res = text.join(",")

// console.log(res);




// const card = [
//     'card-1',
//     'card-2',
//     'card-3',
//     'card-4',
//     'card-5',
// ]
 
// const remove = card.indexOf('card-3')

// card.splice(remove,1)

// card.push("card-6")

// card.splice(2,1,'card-8')

// console.log(card);

// =======================================================



// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.


// function logItems(array){
//     for(let i = 0; i < array.length; i +=1){     
//         console.log(i+1,array[i]);                  
//     }
       
// }
// console.log(logItems(['Mango', 'Poly', 'Ajax']));



// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord){
//     const caund = message.split(" ").length
//     return caund*pricePerWord
// }

// console.log(calculateEngravingPrice("Для цього створи функцію",100));


// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

// function findLongestWord(string){
//     const caund = string.split(" ")  
//     let maxString = caund[0]
//     for(const str of caund){
//         if(str.length > maxString.length ){
//             maxString = str
//         }    
//     }
//       return maxString
// }

// console.log(findLongestWord("Напиши скрипт підрахунку вартостiiiiiiiі гравіювання прикрас"));

//  const string =  prompt("введите текст")

//  function formatString(string){
// if(string.length <= 40){
//     return string;
// }
//  return `${string.slice(0, 40)}...`;
//  }

//  const result = formatString(string);
// console.log(typeof result);

//  console.log(result);


// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі

// function checkForSpam(message){
// if(message.toLowerCase().includes("spam") || message.toLowerCase().includes('sale')){
// return true
// }
// else{
//     return false
// }
// }

// console.log(checkForSpam("приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі"));



// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.


// let input;
// const numbers = [];
// let total = 0;


// while(true){
// input = prompt("введите число")
// if(input === null){
//     break
// }
// else{
// numbers.push(input);
// }
// }
// if(numbers.length > 0){
// for(let i = 0; i < numbers.length; i +=1){
// total += numbers[i]
// }
// }

// console.log(`Загальна сума чисел дорівнює ${total}`);






 


    