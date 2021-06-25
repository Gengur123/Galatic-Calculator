# (Galatic-Calculator)


#### By Arthur Lee

## Technologies Used

* _Javascript_
* _Jest_
* _JQuery_
* _Visual Studio code_
* _HTML_

## Description
A calculator that shows you what age you would be on another planet!

## Setup/Installation Requirements
* _Clone this repository to your desktop._
* _Mavigate to the top level of the directory._
* _Open file with a code editor_
* _Run npm install in your terminal_
* _Run npm run test to see what the program can do!._


## Known Bugs

* _No known bugs_


## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)
Copyright (c) 2021 Arthur Lee
## Contact Information

_Arthur Lee [meleearthur@gmail.com](meleearthur@gmail.com)_


## Specs

describe newAge()

Test: newAge.age should exists when passing in a 30
Expected: newAge.age = 30

Test: newAge.ageInDays should exists when passing in the age
Expected: ageInDays = 10950

Test: newAge.averageAgeOnEarth should exists when passing in a 80
Expected: newAge.averageAgeOnEart = 80

describe mercury(), venus(), mars(), jupiter()
Test: They all should caculate each age but with a different multiplier
Expected: mercury() age.planetAge = 7
          venus() age.planetAge = 18
          mars() age.planetAge = 56
          jupiter() age.planetAge = 355


describe lifeExpectancy() 

Test: lifeExpectancy should calculate the persons age to see if they past their life expectancy on that planet
Expected: this.planetAge(50) >>> expectedLife = 30
Expected: this.planetAge(90) >>> expectedLife = 10



