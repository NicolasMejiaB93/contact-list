let listaDeContactos = ["nicolas mejia", "tatiana aguirre", "camila suarez", "jorge meneses", "juan sebastián hernández"];

function añadirContacto(contacto){
    listaDeContactos.push(contacto);
    return listaDeContactos;
}

console.log(añadirContacto("martha bedoya"));

borrarContacto = (start,deleteCount) => {
    listaDeContactos.splice(start,deleteCount);
    return listaDeContactos;
}

console.log(borrarContacto(0,2));