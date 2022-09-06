document.addEventListener("DOMContentLoaded", function(){

})

async function criandoUsuario(){
    const novousuario = {
        nome: "Jonathas",
        email: "jonathas@gmail.com",
        senha: "1234",
        cep: "31250780"
    }
    fetch("http://localhost:3000/usuario", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(novousuario)
    })
    .then(res => res.json())
    .then(res => console.log(res))
}

async function pegandoUsuarios() {
    fetch("http://localhost:3000/usuario")
    .then(res => res.json())
    .then(res => {
        const usuarios = res.usuarios;
        usuarios.map(usuarios => {
            console.log(usuarios)
        })
    })


}

async function alterando(){
    fetch("http://localhost:3000/usuario/6", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: "soulindo@gmail.com"})
    })
    .then(res => res.json())
    .then(res => console.log(res))
}

async function loginUsuario(){
    const login = {
        usuario: "Jonathas",
        senha: "1234"
    }
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(login)
    })
    .then(res => res.json())
    .then(res => console.log(res))
}

async function usuario(){
    fetch("http://localhost:3000/usuario")
    .then(res => res.json())
    .then(res => {
        const usuarios = res.usuarios;
        usuarios.map(usuario => {
            
        })
    })
}

async function usuario (){
    fetch("http://localhost:3000/usuario")
    .then(res => res.json ())
    .then(res => {
       const usuarios = res.usuarios;
       usuarios.map(usuario =>{
        console.log(usuario)
        const getId = document.querySelector("#usuarios");
        enviar(usuarios.cep)
        const li = document.createElement("li");
        li.innerHTML = usuario.nome
        getId.appendChild(li)
       })
    })
}

async function enviar() {
    const cep = document.getElementById("input-cep");
    const valorCep = cep.value
    const adress = await fetch(`https://viacep.com.br/ws/${valorCep}/json/`)
    const jsonAdress = await adress.json()
    console.log(jsonAdress)
    const tableCep = document.getElementById("table-cep");
    const tr = document.createElement("tr");
    for (var atributo in jsonAdress) {
        const td = document.createElement("td");
        td.innerHTML = jsonAdress[atributo];
        tr.appendChild(td);

    }
    tableCep.appendChild(tr);

//Formulário////////////////
const inputRua = document.getElementById("input-rua");
inputRua.value = jsonAdress.logradouro;

const inputUf = document.getElementById("input-uf");
inputUf.value = jsonAdress.uf;
}