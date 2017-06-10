var DnaTranscriber=function (){};

DnaTranscriber.prototype.toRna = function (dna) {

//dna hash tables
  var translation={
     G:'C',
     C:'G',
     T:'A',
     A:'U'
  };
//to store the converted value
translated='';
//convert into array using spread operator or split() method
var dnaA=[...dna];
//apply for each on dnaA array
dnaA.forEach(function(el){
  translated+=translation[el];
});

return translated;
};

module.exports = DnaTranscriber;
