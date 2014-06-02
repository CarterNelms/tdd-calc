/* jshint unused: false */

'use strict';

var _ = require('lodash');

class Calculator
{
  static add(x,y)
  {
    return x+y;
  }

  static subtract(x,y)
  {
    return x-y;
  }

  static pow(x,y)
  {
    return Math.pow(x,y);
  }

  static sum(a)
  {
    return _(a).reduce((sum, num)=>sum+num);
  }

  static addTwoFractions(x, y)
  {
    var [xn, xd] = fractionStringToArray(x);
    var [yn, yd] = fractionStringToArray(y);

    var numerator = xn*yd + yn*xd;
    var denominator = xd*yd;

    return `${numerator}/${denominator}`;
  }

  static fractionSum(fractions)
  {
    var fraction = fractions.reduce((prev, curr)=>Calculator.addTwoFractions(prev, curr));

    var [numerator, denominator] = fractionStringToArray(fraction);

    var maxDividend = (numerator < denominator) ? numerator : denominator;
    for(var i = 2; i < maxDividend; ++i)
    {
      divideByIfDivisibleBy(i);
    }

    function divideByIfDivisibleBy(dividend)
    {
      if(numerator%dividend === 0 && denominator%dividend === 0)
      {
        numerator /= dividend;
        denominator /= dividend;
        divideByIfDivisibleBy(dividend);
      }
    }

    return `${numerator}/${denominator}`;
  }
}

function fractionStringToArray(str)
{
  return str.trim().split('/').map(n=>n*1);
}

module.exports = Calculator;