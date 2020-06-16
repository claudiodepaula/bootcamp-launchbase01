const nome = 'Cláudio';
const altura = 1.72;
const peso = 90 ;
const sexo = 'M';

var imc = peso /(altura*altura);

if (imc>=30){
    console.log(`${nome}, o seu IMC é ${imc.toFixed(2)} e você está acima do peso!`);
} else {
    console.log(`${nome}, o seu IMC é ${imc.toFixed(2)} e você não está acima do peso!`)

}