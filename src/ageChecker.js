export default class newAge {
  constructor(age) {
    this.age = age;
    this.ageInDays = age * 365;
    this.planetAge = 0
    this.averageAgeOnEarth = 80;
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

  // lifeExpectancy(){
  //   if (this.age > 80) {
  //     return this.age - 80
  //   }else
  //     return 80 - this.age

  // }
}