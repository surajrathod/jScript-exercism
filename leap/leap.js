//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
//
// YOUR CODE GOES HERE
this.input=input;
//
};

Year.prototype.isLeap = function() {
//
// YOUR CODE GOES HERE
if( (this.input%400==0 || this.input%100!=0) &&(this.input%4==0))
  return true;
return false;
};

module.exports = Year;
