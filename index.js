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
    const seconds = ((timeInSeconds- (hours * 3600)) - (minutes * 60)).toFixed(0); //zwraca stringa!
    
    let actualTime = ""; // Dodawane po kolei warunków by utworzyć wymagany ciąg np "3h 15m 34s"
    // Jeśli zmienna nie istnieje np hours to pierwsze miejsce zostanie puste i zost  np "15m 34s" i przejdzie do kolejnego warunku.
    console.log('hours in const:',hours+'|');
    console.log('minutes in const:',minutes+'|');
    console.log('seconds in const:',seconds+'|');
    console.log('typ godziny:', typeof(hours));
    console.log('typ minuty:', typeof(minutes));
    console.log('typ sekundy:', typeof(seconds));
    
    if (hours && minutes === 0 && seconds === "0") {
        actualTime += hours + "h";        
    }

    if (hours && minutes != 0 || hours && seconds != "0" || hours && minutes != 0 && seconds != "0" ) {
        actualTime += hours + "h "; //`${hours}h `; 
    }
    
    if (minutes && seconds === "0") {
        actualTime += minutes + "m";
        console.log('minutes if: ', seconds );
    }
    
    if (minutes && seconds !== "0") {
        actualTime += minutes + "m ";
    }

    if (seconds && seconds !== "0") {
        actualTime += seconds + "s";
    }
    
    console.log('Seconds: ', '"' + seconds + '"');
    return actualTime;
}
console.log('Test time: ', '"' + formatDate(7200) + '"');



module.exports = formatDate;

