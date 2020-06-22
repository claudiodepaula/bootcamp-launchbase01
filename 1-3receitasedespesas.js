const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

//Função calculaSaldo recebendo receitas e despesas, e fazendo o cálculo do resultado
function calculaSaldo(receitas, despesas){
    const resulSaldo = somaNumeros(receitas)-somaNumeros(despesas);
    return resulSaldo;
}

function somaNumeros(numeros){
    var soma=0;
    for(num of numeros){
        soma+=num;
    }
    return soma;
}

for(usuario of usuarios){
    const saldo = calculaSaldo(usuario.receitas,usuario.despesas);
    if(saldo>0){
        console.log(`${usuario.nome} possui saldo Positivo de ${saldo.toFixed(2)}`);
    } else {
        console.log(`${usuario.nome} possui saldo Negativo de ${saldo.toFixed(2)}`);
    }
}

