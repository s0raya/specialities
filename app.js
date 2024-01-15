const express = require('express');
const app = express();
const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];


const getUsers = specialty => {
    let count = 0;
    let printUsers = '';
    usersData.forEach(user => {
        if(specialty === user.specialty) {
            count++;
            printUsers += `
            <ul>
                <li>Nombre: ${user.name}</li>
                <li>Edad: ${user.age}</li>
                <li>Especialidad: ${user.specialty}</li>
            </ul>
            `
        }
    })
    return { printUsers, count};
}

const printHTML = () => {
    return head = `    
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Especialidades</title>
    </head>
    `
}


app.get('/', (req,res) => {
    res.send(`
    ${printHTML()}
    <body>
        <h1>¿Que especialidad estás buscando?</h1>
        <h3>Elige una de las siguientes:</h3>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Developers</a>
        <a href="/QAs">QAs</a>
        <a href="/ventas">Ventas</a>
        <a href="/otros">otros</a>     
    </body>
    </html>
    `
    )
})

app.get('/marketing', (req,res) => {
    res.send(`
    ${printHTML()}
        <body>
            <h1>Marketing</h1>
            <h3>El número total de personas especializadas en marketing es de: ${getUsers('marketing').count}</h3>
            ${getUsers('marketing').printUsers}
            <a href="/">Home</a>
            <a href="/developers">Developers</a>
            <a href="/QAs">QAs</a>
            <a href="/ventas">Ventas</a>
            <a href="/otros">otros</a>
        </body>
        </html>
        `
    )
})

app.get('/developers', (req,res) => {
    res.send(`
    ${printHTML()}
        <body>
            <h1>Developers</h1>
            <h3>El número total de personas especializadas en desarrollo es de: ${getUsers('developers').count}</h3>
            ${getUsers('developers').printUsers}
            <a href="/">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/QAs">QAs</a>
            <a href="/ventas">Ventas</a>
            <a href="/otros">otros</a>   
        </body>
        </html>
        `
    )
})

app.get('/QAs', (req,res) => {
    res.send(`
    ${printHTML()}
        <body>
            <h1>QAs</h1>
            <h3>El número total de personas especializadas en QAs es de: ${getUsers('QAs').count}</h3>
            ${getUsers('QAs').printUsers}
            <a href="/">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Developers</a>
            <a href="/ventas">Ventas</a>
            <a href="/otros">otros</a>     
        </body>
        </html>
        `
    )
})

app.get('/ventas', (req,res) => {
    res.send(`
    ${printHTML()}
        <body>
            <h1>Ventas</h1>
            <h3>El número total de personas especializadas en ventas es de: ${getUsers('ventas').count}</h3>
            ${getUsers('ventas').printUsers}
            <a href="/">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Developers</a>
            <a href="/QAs">QAs</a>
            <a href="/otros">otros</a>     
        </body>
        </html>
        `
    )
})

app.use((req,res) => {
    res.status(404).send(`<h1>Página no encontrada</h1>
    <a href="/">Home</a>
    <a href="/marketing">Marketing</a>
    <a href="/developers">Developers</a>
    <a href="/QAs">QAs</a>
    <a href="/ventas">Ventas</a>`)
})

app.listen(3000, () => {
    console.log('nodeJS está escuchando en el puerto http://localhost:3000');
})