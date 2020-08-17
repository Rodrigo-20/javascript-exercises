const leapYears = function(year) {
    let yearP=year;
    if(yearP%4==0){
            
        if(yearP%100==0){
            if(yearP%400==0){
                return true;
            }
            else{ return false;}
        }
        else{   return true;}
    }
    else { return false;}
}

module.exports = leapYears
