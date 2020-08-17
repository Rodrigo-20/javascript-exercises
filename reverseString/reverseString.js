const reverseString = function(normalString) {
    let stringLength=normalString.length;
    let revString="";
    for(let i=0;i<stringLength;i++){
        let reversIndex=stringLength-i-1;
        revString=revString.concat(normalString[reversIndex]);

    }
    return revString;
}

module.exports = reverseString
