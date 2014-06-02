/* global describe, it */


'use strict';

var expect = require('chai').expect;
var traceur = require('traceur');
var Calculator = traceur.require(__dirname + '/../../app/models/calculator.js');

describe('Calculator', function(){
  describe('.add', function(){
    it('should add two numbers', function(){
      var sum = Calculator.add(2,3);
      expect(sum).to.equal(5);
    });
  });
  describe('.subtract', function(){
    it('should find difference between two numbers', function(){
      var diff1 = Calculator.subtract(3,2);
      expect(diff1).to.equal(1);

      var diff2 = Calculator.subtract(-4,-2);
      expect(diff2).to.equal(-2);
    });
  });
  describe('.pow', function(){
    it('should exponentiate two number together', function(){
      var exp = Calculator.pow(4,2);
      expect(exp).to.equal(16);
    });
  });
  describe('.sum', function(){
    it('should add up a list of numbers', function(){
      var sum = Calculator.sum([3,4,5]);
      expect(sum).to.equal(12);
    });
  });
  describe('.fractionSum', function(){
    it('should return the sum of fractions as a fraction', function(){
      var fraction = Calculator.fractionSum(['3/5', '5/3', '7/15']);
      expect(fraction).to.equal('41/15');
    });
  });
});