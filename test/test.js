const assert = require('assert');
const {expect} = require('chai');

const countOddNumber = (arr = []) => {
    let countEl = 0;
    arr.map(el => {
        if (el % 2 === 1) countEl++
    })
    return countEl;
};

describe('should count odd positive number in array', () => {

    it('should count odd positive number in array', () => {
        assert.equal(countOddNumber([2, 4, 3, 7, 9]), 3);
    });

    it('should count odd positive number in array', () => {
        assert.equal(countOddNumber([32, 14, 33, 78, 91]), 2);
    });

    it('should count odd positive number in array', () => {
        assert.equal(countOddNumber([325, 143, 337, 789, 911]), 5);
    });

    it('should count odd positive number in array', () => {
        assert.equal(countOddNumber([0, 0, -1, 4, 3]), 1);
    });
});

const sortArrayUp = (arr = []) => {
    return arr.sort((a, b) => a - b);
};

describe('should sort array from small to big', () => {
    it('should sort array', () => {
        expect(sortArrayUp([4, 56, 2, 87, 5])).deep.eq([2, 4, 5, 56, 87]);
    });

    it('should sort array', () => {
        expect(sortArrayUp([6, 3, 2, 7, 5])).deep.eq([2, 3, 5, 6, 7]);
    });

    it('should sort array', () => {
        expect(sortArrayUp([1, 4, 2, 3, 5])).deep.eq([1, 2, 3, 4, 5]);
    });

    it('should sort array', () => {
        expect(sortArrayUp([-4, -56, 2, 87, 5])).deep.eq([-56, -4, 2, 5, 87]);
    });
});

const isItPalindrome = (str) => {
    let str2 = str.split('').reverse().join('');
    if (str === str2) return true;
    else return false;
};

describe('string should be palindrome', () => {
    it('should string "understand" not be palindrome', () => {
        expect(isItPalindrome('understand')).eq(false);
    });

    it('should string "yurii" not be palindrome', () => {
        expect(isItPalindrome('yurii')).eq(false);
    });

    it('should string "absdsba" not be palindrome', () => {
        expect(isItPalindrome('absdsba')).eq(true);
    });

    it('should string "tenet" not be palindrome', () => {
        expect(isItPalindrome('tenet')).eq(true);
    });

    it('should string "civic" not be palindrome', () => {
        expect(isItPalindrome('civic')).eq(true);
    });

    it('should string "government" not be palindrome', () => {
        expect(isItPalindrome('government')).eq(false);
    });
});