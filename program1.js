const buildPyramid = (num) => {
    var pyramid="";
    for(let i=0;i<num;i++){
        for(let j=num-i;j>0;j--){
            pyramid+=" ";
        }
        for(let j=0;j<i+1;j++){
            pyramid+="*";
            pyramid+=" ";

        }
        pyramid+="\n";
    }
    console.log(pyramid);
        return pyramid;
};
buildPyramid(6)


/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
