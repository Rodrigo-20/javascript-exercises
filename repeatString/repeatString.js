const repeatString = function(message,numOfRep) {
    let finalMessage="";
    if(numOfRep>=0){
        for(let i=0;i<numOfRep;i++){
        finalMessage+=message;
        }
        
    }
    else{ finalMessage='ERROR'}
    return finalMessage;    
}

module.exports = repeatString
