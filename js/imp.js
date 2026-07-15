// const val = [12,-2,13,15,44,11,33,445,23,214,456,457]

// const res = val.some((vallet) => vallet < 0)

// console.log(res);


// val.forEach((item)=>console.log(item))

// const low = val.map((vallet)=>{
//     return Math.round(vallet / 2)
// }) 

// console.log(low);

// const filteretNumber = val.filter((vallet)=> vallet > 100 )
 

// console.log(filteretNumber);

// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//   ];
//   const userActive = users.every(({isActive}) => isActive )

//   console.log(userActive);
  


//   const findName = users.find(({name}) => name.toLocaleLowerCase() === "poly" )

//   console.log(findName);
  

//   const res = findName.name 

//   const res2 = Object.values(findName)

//   console.log(res2[0]);
  



//   const activeUser = users.filter((vallet)=> {   
//     return vallet.isActive === true
// })

// const nameUser = activeUser.map((names)=>names.name)

//   console.log(activeUser);
//   console.log(nameUser);
  

//   const result = users.filter(({isActive})=>isActive).map(({name})=>name)

//   console.log(result);
  
  const users = [
  {
    id: "a12d4f7c-3c61-4b4f-92a4-8d6c1d72f901",
    name: "Daniel Carter",
    email: "danielcarter@example.com",
    eyeColor: "brown",
    friends: ["Emma Brooks", "Liam Turner"],
    isActive: true,
    balance: 3150,
    skills: ["javascript", "react", "node.js"],
    gender: "male",
    age: 29,
  },
  {
    id: "b34f7e91-5c82-4d0b-ae91-2a8d5d3e7b45",
    name: "Sophia Mitchell",
    email: "sophiamitchell@example.com",
    eyeColor: "blue",
    friends: ["Daniel Carter", "Olivia Scott"],
    isActive: false,
    balance: 1850,
    skills: ["html", "css", "figma"],
    gender: "female",
    age: 24,
  },
  {
    id: "c92b8d14-91a3-47d5-80ef-4e61c5f8d372",
    name: "Michael Adams",
    email: "michaeladams@example.com",
    eyeColor: "green",
    friends: ["Ethan Hall", "Grace Young", "Sophia Mitchell"],
    isActive: true,
    balance: 4275,
    skills: ["python", "django", "sql"],
    gender: "male",
    age: 35,
  },
  {
    id: "d51c9e82-4f9d-41f6-a1cb-5b3f9d7e2c81",
    name: "Emily Walker",
    email: "emilywalker@example.com",
    eyeColor: "hazel",
    friends: ["Michael Adams", "Noah Evans"],
    isActive: true,
    balance: 2980,
    skills: ["vue", "typescript", "sass"],
    gender: "female",
    age: 27,
  },
  {
    id: "e73d1a45-6f4b-49e2-bd52-7d6e4f1b8a90",
    name: "James Robinson",
    email: "jamesrobinson@example.com",
    eyeColor: "brown",
    friends: ["Emily Walker", "Lucas Green"],
    isActive: false,
    balance: 1120,
    skills: ["java", "spring", "docker"],
    gender: "male",
    age: 40,
  },
  {
    id: "f28b6c90-8d14-4d71-93bf-9c1e7f5a4d63",
    name: "Olivia Scott",
    email: "oliviascott@example.com",
    eyeColor: "blue",
    friends: ["Sophia Mitchell", "Emma Brooks"],
    isActive: true,
    balance: 3890,
    skills: ["ui", "ux", "figma", "photoshop"],
    gender: "female",
    age: 31,
  },
  {
    id: "g84f3d21-7b56-4e83-9eaf-1f9d6b2c5e47",
    name: "William Foster",
    email: "williamfoster@example.com",
    eyeColor: "gray",
    friends: ["Daniel Carter", "James Robinson"],
    isActive: false,
    balance: 2435,
    skills: ["go", "kubernetes", "aws"],
    gender: "male",
    age: 33,
  },
  {
    id: "h61e5b92-2d37-4f18-a2d4-3b7c8e9f0a26",
    name: "Emma Brooks",
    email: "emmabrooks@example.com",
    eyeColor: "green",
    friends: ["Olivia Scott", "Daniel Carter", "Grace Young"],
    isActive: true,
    balance: 4720,
    skills: ["react", "next.js", "graphql"],
    gender: "female",
    age: 26,
  },
  {
    id: "i19c8a73-5e64-4b39-91cf-6d2e8f4b1c58",
    name: "Lucas Green",
    email: "lucasgreen@example.com",
    eyeColor: "brown",
    friends: ["James Robinson", "Noah Evans"],
    isActive: true,
    balance: 3365,
    skills: ["c++", "qt", "opencv"],
    gender: "male",
    age: 30,
  },
  {
    id: "j47d2f81-9a25-4c56-b8de-5f1a7c3d9b14",
    name: "Grace Young",
    email: "graceyoung@example.com",
    eyeColor: "blue",
    friends: ["Emma Brooks", "Michael Adams"],
    isActive: false,
    balance: 1590,
    skills: ["marketing", "seo", "analytics"],
    gender: "female",
    age: 28,
  },
];


const supfrinds = users.flatMap((frind) => frind.friends )


console.log(supfrinds);


// const findEmail = "graceyoung@example.com"


// const searchEmail = users.find((user) => user.email === findEmail)


// console.log(searchEmail);


// const active = users.filter((userActiv) => !userActiv.isActive )

// console.log(active);


// const nameUser = users.filter((user) => user.eyeColor === "green" ).map((userName) => userName.name)


// console.log(nameUser);

// const frendUser = users.find(({friends}) => friends.length > 2)


// console.log(frendUser);
