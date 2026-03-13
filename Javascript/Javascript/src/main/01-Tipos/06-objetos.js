//Personaje
let nombre = "Mitsumi";
let anime="Skip and Loafer";
let edad=16;

let personaje={
    nombre: "Mitsumi",
    anime: "Skip and Loafer",
    edad: 16
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime'])
console.log(personaje['edad'])

personaje.edad = 17;
personaje['edad'] = 17;
console.log(personaje['edad']);

delete personaje.anime;
console.log(personaje);