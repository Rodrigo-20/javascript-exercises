const sumAll = function() {
let init=0;
let k=1;
let sum=1;
if(arguments[0]*arguments[1]>0 &&typeof arguments[0]=='number' && typeof arguments[1]=='number' ){
if(arguments[1]>arguments[0]){
    init=arguments[0];
    sum=arguments[0];
    while(init<arguments[1]){
        init++;
        sum=init+sum;
        
    }
    return sum;
}
else if(arguments[0]>arguments[1]) {
    init=arguments[1];
    sum=arguments[1];
    while(init<arguments[0]){
        init++;
        sum=init+sum;
    }
    return sum;
}
    return 0;
}
else { return 'ERROR' }
}

module.exports = sumAll
