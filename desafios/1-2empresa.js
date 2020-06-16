//Armazenamento de informações da empresa
const usuario = {
    nome:'Diego',
    empresa: {
        nome:'Rocketseat',
        cor:'Roxo',
        foco:'Programação',
        endereco:{
            rua: 'Rua Guilherme Gembala',
            numero: 260
        }
    }
}

//Impressão no Console dos dados solicitados no exercício. Nome da empresa, rua e número.
console.log(`A empresa ${usuario.empresa.nome}, está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`);
