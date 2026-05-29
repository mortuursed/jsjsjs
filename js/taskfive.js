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




const card = [
    'card-1',
    'card-2',
    'card-3',
    'card-4',
    'card-5',
]
 
const remove = card.indexOf('card-3')

card.splice(remove,1)

card.push("card-6")

card.splice(2,1,'card-8')

console.log(card);




    