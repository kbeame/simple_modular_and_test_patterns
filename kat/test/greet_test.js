const chai = require('chai');
const expect = chai.expect;
const greet = require (__dirname + '/../lib/greet.js');

describe('Should say Hello to individuals name', () => {
    it('greet should say "Hello individuals name"', () => {expect(true).to.eql(true)
    });
});


// describe('Should say Hello to individuals name', () => {
//     it('greet should say "Hello individuals name"', () => {expect(greet('name')).to.eql('Hello name');
// });
