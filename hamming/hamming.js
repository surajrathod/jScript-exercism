var Hamming=function(){}


Hamming.prototype.compute=function(dna1,dna2){

  if(dna1.length===dna2.length){
   var count=0;
   for(var i=0;i<=dna1.length;i++){
     if(dna1.charAt(i)!==dna2.charAt(i)){
       count++;
     }
   }
  return count;
  }

else{throw new Error ('DNA strands must be of equal length.');}




}

module.exports=Hamming;
