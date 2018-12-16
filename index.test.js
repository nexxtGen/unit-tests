const assert = require('assert');
const calculateTotalPoints = require('./index');
// ref (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor)
describe('calculateTotalPoints', () => {
    describe('WindFactor', () => {
        it('should work when wind factor points is < 0', () => {
            const actual = calculateTotalPoints(131.5,'big', 120, [19, 18.5, 19, 19, 19], -6.5, 0);
    
            const expected = 131.2;
    
            assert.equal(actual, expected);
        });

        it('should work when wind factor points is > 0', () => {
            const actual = calculateTotalPoints(120.5, 'big', 120, [17,17,17,17.7,17.5], 0.8, 0);
    
            const expected = 113.2;
    
            assert.equal(actual, expected);
        });

        it('should work when wind factor points is 0', () => {
            const actual = calculateTotalPoints(106,'normal',98,[18.5,19, 18.5, 18.5, 18.5], 0, 6.4);
    
            const expected = 137.9;
    
            assert.equal(actual, expected);
        });
    });

    describe('gateFactor', () => {
        it('should work when gate factor points is > 0', () => {
            const actual = calculateTotalPoints( 227.5,'mammoth', 200, [18, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);

            const expected = 208.3;

            assert.equal(actual, expected);
        });
    });
});