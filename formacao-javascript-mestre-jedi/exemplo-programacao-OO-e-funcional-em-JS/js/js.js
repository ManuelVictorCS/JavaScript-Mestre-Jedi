//funcional
function sejaBemVindo(){
    console.log("Seja bem vindo a Formação JavaScript Mestre Jedi");
}

console.log("chamando a função seja bem vindo");
sejaBemVindo();

//POO
var objProfessor = {
    nome: "Professor Manuel Victor",
    curso: "Formação JavaScript Mestre Jedi !! :)",
    mistrarAula: function(){
        console.log("Ministrando aula de JavaScript");
    }
};

console.log("objeto Professor");
console.log(objProfessor);

console.log("acessando propriedades do objeto: objProfessor.nome");
console.log(objProfessor.nome);
console.log(objProfessor.curso);


console.log("Chamando o método do objeto professor .ministrarAula()");
objProfessor.mistrarAula();