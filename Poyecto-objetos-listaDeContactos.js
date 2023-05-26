//creo mi array con unos contactos iniciales

let miListaDeContactos = [
  {
    "id": 1094972117,
    "nombres": "Nicolás",
    "apellidos": "Mejía Bedoya",
    "telefono": 3154773680,
    "ubicaciones":{"ciudad": "Circasia", "direccion": "Cantabria, casa I-6"}
  },
  {
    "id": 41892463,
    "nombres": "Martha Isabel",
    "apellidos": "Bedoya Quintero",
    "telefono": 3187070649,
    "ubicaciones":{"ciudad": "Circasia", "direccion": "Cantabria, casa I-6"}
  },
  {
    "id": 7521508,
    "nombres": "Fernando",
    "apellidos": "Bedoya Quintero",
    "telefono": 3187070640,
    "ubicaciones":{"ciudad": "Armenia", "direccion": "Torres del Río"}
  },
];

//reviso que efectivamente sean objetos
console.log(typeof miListaDeContactos[0]);

//PRIMER PUNTO:

//creo la función para agregar nuevos contactos con Fcatory Function
function crearContacto(id, nombres, apellidos, telefono, ciudad, direccion){
    let newContact = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicaciones: {ciudad: ciudad, direccion: direccion},
    };
 
 miListaDeContactos.push(newContact);
}

//llamo a la función y le agrego un contacto nuevo
crearContacto(1094956607, "Erika Tatiana", "Aguirre Abril", 3108475520, "Armenia", "Torres del Río")

//imprimo el array nuevo con el contacto agregado
console.log(miListaDeContactos);


// SEGUNDO PUNTO:

//creo una función para eliminar un contacto llamándola por un Index
const eliminarContacto = (borrarId) => {
    let indiceBorrar = miListaDeContactos.findIndex(indiceBorrar => indiceBorrar.id == borrarId);
    miListaDeContactos.splice(indiceBorrar, 1);
    return miListaDeContactos
}

//llamo a la función y le elimino un contacto
eliminarContacto(1094972117);

//imprimo el array con el contacto eliminado
console.log(miListaDeContactos);


// BONUS PARA EL REVIEW-1

//creo función para reemplazar datos dentro del Array 
function actualizarDato(id, valorAntiguo, valorNuevo) {
    let indiceCambiar = miListaDeContactos.findIndex(indiceCambiar => indiceCambiar.id === id);
   
    if (indiceCambiar !== -1) {
        if(valorAntiguo === "ciudad" || valorAntiguo === "direccion"){
             miListaDeContactos[indiceCambiar].ubicacion[valorAntiguo] = valorNuevo;
        } else {
            miListaDeContactos[indiceCambiar][valorAntiguo] = valorNuevo;
            }
     }
  }

  //llamo a la función y le cambio un dato
actualizarDato(7521508, "nombres", "Jesús");

//imprimo el array con el nuevo dato cambiado
console.log(miListaDeContactos);