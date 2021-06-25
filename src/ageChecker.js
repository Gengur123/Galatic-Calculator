export default class newAge {
  constructor(age) {
    this.age = age;
    this.ageInDays = age * 365;
    this.averageAgeOnEarth = 80;
  }
  mercury(){
    return Math.trunc(this.age * 0.24)
  }
  venus(){
    return Math.trunc(this.age * 0.62)
  }
  mars(){
    return Math.trunc(this.age * 1.88)
  }
  jupiter(){
    return Math.trunc(this.age * 11.86)
  }
}