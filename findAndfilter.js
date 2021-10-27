// Find  --> Retorna o 1º em que a condilção é verdadeira 

const users = [
    { name: "Wallace", age: 28 },
    { name: "Yasmin", age: 21 },
    { name: "Grazy", age: 22 },
    { name: "Octávio", age: 22 }
]

const userWith22 = users.find(user => user.age === 22)
console.log(userWith22)

console.log("----------------------------")
const allUser22 = users.filter(user => user.age === 22)
console.log(allUser22)