/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   return Object.entries(objeto);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var array = string.split("");
   var objeto = {};

      array.map((value,index) => {
         if(!objeto.hasOwnProperty(value)){
             objeto[value] = 1;
     
         }else if(value === array[index]){
                     objeto[value] = objeto[value] + 1;
                 }else{
                     objeto[value] = 1;
                 }
      });

      return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var letraMinus ="abcdefghijklmñopqrstuvwyz";
   letraMinus = letraMinus.split("");
   console.log(letraMinus);
    string = string.split("");

    var mayus = [];
    var minus = [];
    

   for (let i = 0; i < string.length; i++) {
         var band = false;
         for (let j = 0; j < letraMinus.length; j++) {
            if(string[i] === letraMinus[j]){
                  minus.push(string[i]);
                  band = true;
                  break;
            }
         }

         if(band === false){
            mayus.push(string[i]);
         }
   }

   minus = minus.join('');
   mayus = mayus.join('');
      
   return mayus + minus;
   }

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   frase = frase.split('');
   var fraseFinal = [];
   cont = 0

   for (let i = 0; i < frase.length; i++) {
      if(frase[i] === ' ' || i === frase.length - 1){
         for (let j = i; j >= cont; j--) {
               if(frase[j] !== ' '){
                  fraseFinal.push(frase[j]);
               }
         }
         if(i !== frase.length - 1){
               fraseFinal.push(' ');
         }
         cont = i;
      }
   }
   fraseFinal= fraseFinal.join('');
   return fraseFinal;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numStr = numero.toString()
   numStr = numStr.split("");

   var index = Math.floor(numStr.length / 2);
   var bandera = true;

   for (let i = 0; i < index; i++) {
      if(numStr[i] !== numStr[(numStr.length - 1) - i]){
         console.log(numStr[i] ,numStr[(numStr.length - 1)])
         bandera = false;
         break;
      }
   }

   if(bandera === true){
      return 'Es capicua';
   }else{
      return 'No es capicua';
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   var str = string.split('');
   var nuevoStr = [];
   var cont = 0;
   
   str.map((value) => {
   
      switch (value) {
       case 'a':
           break;
       case 'b':
           break;
       case 'c':
           break;
       default:
           nuevoStr[cont] = value;
           cont++;
           break;
      }
   });

   return nuevoStr.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   var auxiliar;
   var cont = 0;
   
   for (let i = 0; i < arrayOfStrings.length; i++) {
       if(arrayOfStrings.length - 1 !== i){
   
           if(arrayOfStrings[i].length > arrayOfStrings[i + 1].length){
               auxiliar = arrayOfStrings[i];
               arrayOfStrings[i] = arrayOfStrings[i + 1]
               arrayOfStrings[i + 1] = auxiliar;
               i = 0;
   
           }
       }
   
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArr = [];
   var cont = 0;
   if(array1.length < array2.length){

      for (let i = 0; i < array1.length; i++) {
         for (let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]){
               nuevoArr[cont] = array1[i];
               cont++;
            }
         }
      }
   }else{
      for (let i = 0; i < array2.length; i++) {
         for (let j = 0; j < array1.length; j++) {
            if(array2[i] === array1[j]){
               nuevoArr[cont] = array2[i];
               cont++;
            }
         }
      }

   }
   return nuevoArr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
