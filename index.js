//Zad
/*
const formatDate = (timeInSeconds) => {
    return `${timeInSeconds}s`;
}
*/
const formatDate = (timeInSeconds) => {

    if (!timeInSeconds) {
        return '0s';
    }

    const hours = Math.floor(timeInSeconds / 3600); // .toFixed(0) nie zadziała poprawnie gdyż nie zaokrągla zawsze w dół a wg zasad matematyki.
    const minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
    const seconds = ((timeInSeconds- (hours * 3600)) - (minutes * 60)).toFixed(0);
    
    let actualTime = ""; // Dodawane po kolei warunków by utworzyć wymagany ciąg np "3h 15m 34s"
    // Jeśli zmienna nie istnieje np hours to pierwsze miejsce zostanie puste i zost  np "15m 34s" i przejdzie do kolejnego warunku.
    if (hours) {
        actualTime += hours + "h "; //`${hours}h `; 
    }

    if (minutes) {
        actualTime += minutes + "m ";
    }

    if (seconds) {
        actualTime += seconds + "s";
    }
    
    return actualTime;
}
console.log('Test time: ', formatDate(120));


module.exports = formatDate;

