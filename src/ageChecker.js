export default class newAge {
  constructor(age) {
    this.age = age;
    this.ageInDays = age * 365;
    this.planetAge = 0;
    this.averageAgeOnEarth = 80;
    this.expectedLife = 0;
  }
  mercury(){
    return this.planetAge = Math.trunc(this.age * 0.24)
  }
  venus(){
    return this.planetAge = Math.trunc(this.age * 0.62)
  }
  mars(){
    return this.planetAge = Math.trunc(this.age * 1.88)
  }
  jupiter(){
    return this.planetAge = Math.trunc(this.age * 11.86)
  }

  lifeExpectancy(){
    if (this.planetAge > 80) {
      return this.expectedLife = this.planetAge - 80 + " Woah you lived past your life expectancy"
    }else
      return this.expectedLife = 80 - this.planetAge 
  }
}