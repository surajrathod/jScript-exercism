var Pangram=function(str){
  //convert the string to lowercase and remove any white space
  this.str=str.toLowerCase().replace(/\s/g,'');

};

Pangram.prototype.isPangram = function () {
//create the alp variable to store all the alphabate
  var alp='abcdefghijklmnopqrstuvwxyz';


for (var i = 0; i < alp.length; i++) {
  //loop throuch all the alphabate
    if(this.str.indexOf(alp[i])===-1){
      //you can use include function to check if the alp in present in the string
      // if the string has no alphabate return false
      return false;
    }
}
//else it will return true
  return true;
};

module.exports = Pangram;
