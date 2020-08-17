const removeFromArray = function() {
    let myArray=[];
    
    if(Array.isArray(arguments[0])){
            
            myArray=arguments[0];
            for(let i=1;i<arguments.length;i++){
                let k=0;
             
                while( myArray[k]!=arguments[i] && k<myArray.length){
                  
                    k++;
                   
                }
                if(k<myArray.length&&typeof myArray[k]==typeof arguments[i]){
                p=k+1;    
                let t=myArray.splice(k,1);
              
                    }
                }
            }
    else {return myArray;}
    return myArray;         
        }
    


module.exports = removeFromArray
