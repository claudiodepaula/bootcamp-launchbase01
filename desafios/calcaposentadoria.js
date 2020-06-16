const nome = 'Cláudio';
const sexo = 'F';
const idade = 55;
const contribuicao = 35;
const tempoaposenta=idade+contribuicao;

if(sexo=='M'){
    if(contribuicao>=35&&tempoaposenta>=95){
        console.log(`Olá ${nome}, você já pode se aposentar!`);
    } else {
        console.log(`Olá ${nome}, você ainda não pode se aposentar!`);
    }
} else if(sexo=='F'){
    if(contribuicao>=25&&tempoaposenta>=85){
        console.log(`Olá, ${nome}, você já pode se aposentar!`);
    }else{
        console.log(`Olá ${nome}, você ainda não pode se aposentar!`);
    }
}else {
    console.log("Por favor, confira as informações digitadas!");
}







