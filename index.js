// calculateTotalPoints.js
const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);
  //my changes
  const allPoints = distancePoints + stylePoints + windFactor + gateFactor;  
  return Math.round(allPoints * 100) / 100;

}

module.exports = calculateTotalPoints;
