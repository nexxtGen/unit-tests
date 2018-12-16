/*Punkty za styl
Style skoczka ocenia pięcioro sędziów. Oceniają oni sylwetkę podczas lotu oraz lądowanie. 
Szczegóły te dla nas są nieistotne — ważne jest to, że nota każdego sędziego jest liczbą,
 między 0 a 20 (włącznie) i może być "połówką" (czyli np. 15.5).
  Po tym, jak każdy z sędziów oceni skoczka, dwie skrajne noty (minimalną oraz maksymalną) się odrzuca,
   a następnie sumuje pozostałe trzy noty.
*/

// calculateStylePoints.js
const styleNotes = [15, 17, 16.5, 18, 16]; // przykład

//posortovanie tablicy od najmniejszej do największej.
//usunięcie pierwszego i ostatniego rekordu tablicy.
//dodanie do siebie pozostałych rekordów.

//dłuższa versja
//Znalezienie wart najmniejszej w tablicy  var min = Math.min.apply(Math, arr) lub const min = arr.reduce((a, b) => Math.min(a, b))
// analogicznie największej wartości.
//przefiltrowanie tablicy tworząc nową która zawiera el spełniające warunek
//Dodanie all elementów w powstałej tablicy

const calculateStylePoints = (styleNotes) => {
    const sortedElements = styleNotes.sort((a, b) => a - b).slice(1, 4); //arr.slice([begin[, end]])
    return finalStyleNotes = sortedElements.reduce((a,b) => a + b); //arr.reduce(callback, [initialValue])
};

//
console.log('calc style points:', calculateStylePoints(styleNotes)); //49.5 ok  
module.exports = calculateStylePoints;