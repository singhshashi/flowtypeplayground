// @flow

function length(x) {
  return x.length;
}

var total = length('Hello') + length(null);

function correctlength(x) {
  if (x !== null) {
    return x.length;
  }
  return 0;
}

var totalCorrect = correctlength('Hello') + correctlength(null);
