const usuarios = [
    {nome:"Carlos", tecnologias:["Html","CSS"]},
    {nome:"Jasmine", tecnologias:["Javascript","CSS"]},
    {nome:"Tuane", tecnologias:["HTML","Node.js"]}
];

function checaSeUsuarioUsaCSS(usuario){
    for(let tec of usuario.tecnologias){
        if (tec=="CSS"){
            return true;
        } 
    }
    return false;
}

for (let user of usuarios){
    if (checaSeUsuarioUsaCSS(user)){
        console.log(`${user.nome} usa CSS`);
    };
}
