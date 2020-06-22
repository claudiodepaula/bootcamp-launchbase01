const usuarios = [
    {nome:"Carlos", tecnologias:["Html","CSS"]},
    {nome:"Jasmine", tecnologias:["Javascript","CSS"]},
    {nome:"Tuane", tecnologias:["HTML","Node.js"]}
];


for (var i=0;i<usuarios.length;i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}`);
}