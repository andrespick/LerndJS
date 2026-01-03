// personaje de tv

let nombre = "Tanjiro";
let anime = "Deamon slayer";
let edad = 16;

let personaje = {
    nombre: "tanjiro",
    anime: "demon slayer",
    edad: 16,
};// esto es un objeto se le conoce como objeto literal
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime;
console.log(personaje);