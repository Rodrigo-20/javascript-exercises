let findTheOldest = function(people) {

    const oldest=people.map(person=>{
        if(!("yearOfDeath" in person)){
            person.yearOfDeath=(new Date).getFullYear();
            //console.log((new Date).getFullYear());
        }
        return person;
    })
                        .sort((a,b)=>a.yearOfDeath-a.yearOfBirth>b.yearOfDeath-b.yearOfBirth?-1:1);
    return oldest[0];
}
/*findTheOldest(  [
    {
      name: 'Carly',
      yearOfBirth: 2018,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941
    },
  ])*/
module.exports = findTheOldest
