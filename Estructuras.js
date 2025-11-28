// 1.- Crea un array amb 5 números de manera aleatòria. Utilitza les funcions necessàries per, en
// aquest ordre, ordenar de menor a major i obtenir el primer i últim valor.
let nums = [];

for (let i = 0; i < 5; i++) {
    nums.push(Math.floor(Math.random() * 100));
}

console.log("Array original:", nums);

nums.sort((a, b) => a - b);

console.log("Ordenat:", nums);
console.log("Primer:", nums[0]);
console.log("Últim:", nums[nums.length - 1]);


// 2.- Utilitza l’operador de propagació per crear un altre array usant els valors de l’exercici anterior

let nums2 = [...nums];
console.log("Nou array:", nums2);


// 3.- Fusiona dos arrays i esborren els valors duplicats (no utilitzis el Set).

let a1 = [1, 2, 3, 4, 5];
let a2 = [3, 4, 5, 6, 7];

let fusio = a1.concat(a2);

let senseDuplicats = [];
for (let valor of fusio) {
    if (!senseDuplicats.includes(valor)) {
        senseDuplicats.push(valor);
    }
}

console.log("Fusionat sense duplicats:", senseDuplicats);


// 4.- Modifica l’exercici anterior per utilitzar una estructura que no permeti duplicats.

let conjunt = new Set([...a1, ...a2]);
console.log("Amb Set:", Array.from(conjunt));


// 5.- Codifica la funció map d’una Array perquè en creï una nova amb el valor cúbic de cada número.

function cubeMap(arr) {
    let resultat = [];
    for (let num of arr) {
        resultat.push(num ** 3);
    }
    return resultat;
}

console.log(cubeMap([1, 3, 6]));



// 6.- A partir d’una array de strings, es creï una nova amb aquelles que tinguin més d’una lletra ‘a’


// 7.- Crea una estructura Map i insereix 3 claus – valor. Les 3 claus han de ser de tipus de dades
// diferents. Et deixa?


// 8.- Donada una paraula, insereix cada caràcter dins d’una cua. Extreu ara de la cua els caràcters un a
// un per poder decidir si és un palíndrom o no.




// 9.- Crea una Cua d’Objectes amb dades de 3 pel·lícules. Itera la cua per mostrar per pantalla la
// pel·lícula més antiga.