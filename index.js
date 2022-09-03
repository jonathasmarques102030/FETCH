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
    .then(res => res.JSON)
    .then(res => console.log(res))
}

async function pegandoUsuarios() {
    fetch("http://localhost:3000/usuario")
    .then(res => res.JSON)
    .then(res => {
        const usuarios = res.usuarios;
        usuarios.map(usuarios => {
            console.log(usuarios)
        })
    })


}
