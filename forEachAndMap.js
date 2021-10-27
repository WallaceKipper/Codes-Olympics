// Map ==> Cria um array a partir de outro

const users = [
    { name: "Wallace", age: 28, email: "wallace@server2.com", city: "Itanhaém" },
    { name: "Yasmin", age: 20, email: "yasmin@server.com", city: "Rio Branco" },
    { name: "Grazy", age: 21, email: "grazy@server.com", city: "Praia Grande" },
    { name: "Octávio", age: 22, email: " octavio@app.server2.com", city: "São Paulo" }
]


const emailTemplates = [
    {
        message: 'Olá template (1)',
        userFrom: ['Rio de Janeiro', 'Salvador']
    },
    {
        message: 'Olá template (2)',
        userFrom: ['Rio Branco', 'Porto Alegre', 'Santa Catarina']
    },
    {
        message: 'Olá template (3)',
        userFrom: ['São Paulo']
    },
    {
        message: 'Olá template (4)',
        userFrom: ['Itanhaém', 'Praia Grande']
    }
]

const checkServer = (email) => email.includes('server2')

const usersWithCorrectAge = users
    .map(user => !checkServer(user.email) && ({ ...user, age: user.age + 1 }))
    .filter(user => !!user)



// _______________________________________________________________
// _______________________________________________________________
// _______________________________________________________________

users.forEach(({ name, city }) => {
    const { message } = emailTemplates.find(emailTemplate => emailTemplate.userFrom.includes(city))
    console.log(name, message)
})
