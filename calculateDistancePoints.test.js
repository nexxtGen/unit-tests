const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints.js');

const kPointNormal = 98;
const kPointBig = 120;
const kPointMammoth = 200;
// parametrs (distance, hillSize, kPoint)
describe('calculateDistancePoints', () => {
    describe('normal', () => {
        it('should work when distance < kPoint', () => {
            const actual = calculateDistancePoints(90.5, 'normal', kPointNormal);
    
            const expected = 45;
    
            assert.equal(actual, expected);
        });
    });

    describe('big', () => {
        it('should work when distance > kPoint', () => {
            const actual = calculateDistancePoints(134, 'big', kPointBig);

            const expected = 85.2;

            assert.equal(actual, expected);
        });

        it('should work when distance === kPoint', () => {
            const actual = calculateDistancePoints( 120, 'big' ,kPointBig);

            const expected = 60;

            assert.equal(actual, expected);
        });        
    });

    describe('mammoth', () => {
        it('should work when distance > kPoint', () => {
            const actual = calculateDistancePoints(227.5,'mammoth',kPointMammoth);

            const expected = 153;

            assert.equal(actual, expected);
        });

        it('should work when distance < kPoint', () => {
            const actual = calculateDistancePoints(187, 'mammoth',kPointMammoth);

            const expected = 104.4;

            assert.equal(actual, expected);
        });
    });
});