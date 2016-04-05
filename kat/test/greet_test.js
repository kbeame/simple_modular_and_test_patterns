const chai = require('chai');
const expect = chai.expect;
const greet = require (__dirname + '/../lib/greet.js');


describe('Should say Hello to individuals', () => {
    it('greeting should say "Hello individuals-name"', () => {expect(greet('Kat')).to.eql('Hello Kat');
  });
});
