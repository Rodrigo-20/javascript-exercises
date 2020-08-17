const ftoc = function(far) {
  let celcius=0;
  if(far >-459){
    
    celcius=((far-32)*5)/9;
      if(celcius%1!=0){
        celcius=  Math.floor(celcius*10 + 1);
        celcius=celcius/10;
          return celcius;
  }
  return celcius;    
}
  else {return celcius;}
}

const ctof = function(cel) {
  let faren=0;
  if(cel>-273){
    faren=cel*9/5 + 32;
    if(faren%1!=0){
      faren=Math.floor(faren*10 + 1);
      faren=faren/10;
      return faren;
    }

    return faren;
  }
  else {return faren;}
}

module.exports = {
  ftoc,
  ctof
}
