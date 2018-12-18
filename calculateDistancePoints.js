//Wielkość skoczni (normalna, duża, mamucia)
//Długość skoku (zaokrąglana do pół metra)
//Punkt "K" (inny dla każdej skoczni)

/*
                   hillsize  
dostaję  60  pkt na normal / 2pkt/metr

dostaję  60  pkt na big / 1.8/metr

dostaję  120  na extraBig / 1.2/metr

jest punkt K 

przykłady: marian 102 metry/ k 98m/ normal 60pkt
(102, 60 2pkt, 98)

const calculateOneHillSize = (distance , normal(60 i 2pkt), kpoint) {
    return 60 + ((distance - kpoint) *2) 
                  102 - 98 *2 -> 4*2 -> 8 -> 60+ 8 -> 68
                  90 - 98 *2 -> -8 *2 = -16-> 60+ (-16) -> 44
}
*/

// calculateDistancePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {
    const calculateHillsizeCase = (distance, startPoints, multiplier, kPoint ) => {
        return startPoints + ((distance - kPoint) * multiplier);
    }

    switch (hillSize) {
        case 'normal':
            return calculateHillsizeCase(distance, 60, 2, kPoint);
            break;
        case 'big':
            return calculateHillsizeCase(distance, 60, 1.8, kPoint);
            break;
        case 'mammoth':
            return calculateHillsizeCase(distance, 120, 1.2, kPoint);
            break;
        default:
            console.log('Wrong case, enter "normal", "big" or "mammoth"');
    }
};

console.log('test distancePoint:', calculateDistancePoints(227.5, 'mammoth', 200)); //153 it's okej
module.exports = calculateDistancePoints;


  
  