const findTheOldest = function(people) {
  return people.reduce((oldest,current) => {
    const oldestAge  = getAge(oldest.yearOfDeath,oldest.yearOfBirth);
    const currentAge = getAge(current.yearOfDeath,current.yearOfBirth);
    return oldestAge > currentAge ? oldest : current;
    });
}
  

function getAge(death,birth){
    if(!death){
        death =  new Date().getFullYear()
    }
    return death - birth
}

// Do not edit below this line
module.exports = findTheOldest;
