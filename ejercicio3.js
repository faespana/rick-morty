const users = [
    {
        name: "Felipe Espana",
        age: 29,
        email: "faespana@espol.edu.ec",
        country: "Ecuador",
        phone: "0985502731",
        website: "felipe.org"
    },
    {
        name: "Tiana Solano",
        age: 23,
        email: "tisolano@espol.edu.ec",
        country: "Ecuador",
        phone: "098557573",
        website: "tiana.org"
    }
]

const getUsersData = (users, data) => {
    return users.map(user => user[data])
}

console.log(getUsersData(users, "name"))
console.log(getUsersData(users, "age"))

