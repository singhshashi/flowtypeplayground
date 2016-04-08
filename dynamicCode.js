// @flow

function printLength(x) {
  return x.length;
}

var resIncorrect = printLength('Hello') + printLength(42);
var resCorrect = printLength('Hello') + printLength([34,12,34,54]);

