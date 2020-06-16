
const programadores = {
    nome: "João",
    idade: "25 anos",
    tecnologias: [
        {nome: "C++", especialidade:"Desktop"},
        {nome: "Python" , especialidade: "Datascience"},
        {nome: "Javascript", especialidade:"Web/Mobile"}
    ],
};

console.log(`O usuário ${programadores.nome}, tem ${programadores.idade} e usa a tecnologia ${programadores.tecnologias[0].nome}, com especialidade em ${programadores.tecnologias[0].especialidade}`);
