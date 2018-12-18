const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints.js');

describe('calculateStylePoints', () => {
    describe('Array with points, 5 items', () => {
        it('should work if all nothes is the same', () => {
            const actual = calculateStylePoints([15, 15 ,15 ,15 ,15]);
    
            const expected = 45;
    
            assert.equal(actual, expected);
        });

        it('should work if one or more notes is floating-point', () => {
            const actual = calculateStylePoints([14.5, 15.5, 16, 18, 15]);
    
            const expected = 46.5;
    
            assert.equal(actual, expected);
        });

        it('should work if all notes is different', () => {
            const actual = calculateStylePoints([14, 15, 16, 18, 20]);
    
            const expected = 49;
    
            assert.equal(actual, expected);
        });
    });    
});