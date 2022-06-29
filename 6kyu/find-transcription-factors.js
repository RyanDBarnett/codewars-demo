// DESCRIPTION:
// The DNA is a long sequence of either cytosine (C), guanine (G), adenine (A), or thymine (T) and their order is crucial for the transmission of genetic information. The reading of this sequence doesn't always happen from the start to the end, but there are some regions that need to be repeated. To do so, the organisms developed a system composed by “transcription factors”. A transcription factor is a molecule that binds to specific DNA sequence (binding sites), thereby controlling the number of repetitions of that sequence.
//
// Given these group of transcription factors and relative binding sites:
//
// ATF6: "TGACGT"
// CREB: "TGACGCA"
// cMyc: "CACGTG"
// Gata1: "GATT"
// AhR: "TGCGTG"
// Write a function transFactors that takes the argument seq and returns the transcription factor(s) that bind and the binding position(s) in the sequence (starting from 1). The output should be an object containing an array of the name(s) of the transcription factor(s) and an array of the binding position(s).
//
// Please note that some transcription factors could have overlapping binding sites with others (or with themselves).
//
// For example:
//
// seq = "ATGGCTGACGTCGTCATGGCGCCCCGATTGAACGATTCCTCCTCCT"
// returns: { ATF6: [ 6 ], Gata1: [ 26, 34 ] }
// In case the sequence is empty, too short, or doesn't contain a match, the function should return and empty object {}.

// My Solution

function transFactors(seq) {
  var chars = seq.split('');
  var res = chars.reduce((acc, c, i) => {
    if (isATF6(chars, i)) {
      addATF6(acc, i);
    }
    if (isCREB(chars, i)) {
      addCREB(acc, i);
    }
    if (iscMyc(chars, i)) {
      addcMyc(acc, i);
    }
    if (isGatt(chars, i)) {
      addGatt(acc, i);
    }
    if (isAhR(chars, i)) {
      addAhR(acc, i);
    }
    return acc;
  }, {});

  return orderTheRes(res);;
}

function orderTheRes(res) {
  var orderedRes = {
    ATF6: res.ATF6,
    CREB: res.CREB,
    cMyc: res.cMyc,
    Gata1: res.Gata1,
    AhR: res.AhR
  };

  deleteKeysWithNoValue(orderedRes);

  return orderedRes;
}

function deleteKeysWithNoValue(obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
}

function isATF6(chars, i) {
  return chars.slice(i, i + 6).join('') == 'TGACGT';
}

function isCREB(chars, i) {
  return chars.slice(i, i + 7).join('') == 'TGACGCA';
}

function iscMyc(chars, i) {
  return chars.slice(i, i + 6).join('') == 'CACGTG';
}

function isGatt(chars, i) {
  return chars.slice(i, i + 4).join('') == 'GATT';
}

function isAhR(chars, i) {
  return chars.slice(i, i + 6).join('') == 'TGCGTG';
}


function addATF6(acc, i) {
  if (!acc.ATF6) acc.ATF6 = [];
  acc.ATF6.push(i + 1);
}

function addCREB(acc, i) {
  if (!acc.CREB) acc.CREB = [];
  acc.CREB.push(i + 1);
}

function addcMyc(acc, i) {
  if (!acc.cMyc) acc.cMyc = [];
  acc.cMyc.push(i + 1);
}

function addGatt(acc, i) {
  if (!acc.Gata1) acc.Gata1 = [];
  acc.Gata1.push(i + 1);
}

function addAhR(acc, i) {
  if (!acc.AhR) acc.AhR = [];
  acc.AhR.push(i + 1);
}
