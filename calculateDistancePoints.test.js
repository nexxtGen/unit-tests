const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints.js');

// parametrs (distance, hillSize, kPoint)
describe('calculateDistancePoints', () => {
    describe('normal', () => {
        it('should work when distance < kPoint', () => {
            const actual = calculateDistancePoints(90.5, 'normal', 98);
    
            const expected = 45;
    
            assert.equal(actual, expected);
        });
    });

    describe('big', () => {
        it('should work when distance > kPoint', () => {
            const actual = calculateDistancePoints(134, 'big', 120);

            const expected = 85.2;

            assert.equal(actual, expected);
        });

        it('should work when distance === kPoint', () => {
            const actual = calculateDistancePoints( 120, 'big' ,120);

            const expected = 60;

            assert.equal(actual, expected);
        });        
    });

    describe('mammoth', () => {
        it('should work when distance > kPoint', () => {
            const actual = calculateDistancePoints(227.5,'mammoth',200);

            const expected = 153;

            assert.equal(actual, expected);
        });

        it('should work when distance < kPoint', () => {
            const actual = calculateDistancePoints(187, 'mammoth',200);

            const expected = 104.4;

            assert.equal(actual, expected);
        });
    });
});