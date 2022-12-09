const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome")
const Iemail = document.querySelector(".email")
const Itel = document.querySelector(".tel")
const Icpf = document.querySelector(".cpf")
const Iendereço = document.querySelector(".end")

function cadastrar () {
    fetch("http://localhost:8080/cadastrar",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(
            {
            nome: Inome.value,
            email: Iemail.value,
            telefone: Itel.value,
            cpf: Icpf.value,
            endereço: Iendereço.value
        })

    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
    
};

function limpar () {
    Inome.value = "";
    Iemail.value = "";
    Itel.value = "";
    Icpf.value = "";
    Iendereço.value = "";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

   cadastrar();
   limpar();
})