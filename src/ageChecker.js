export default class newAge {
  constructor(age) {
    this.age = age;
    this.ageInDays = age * 365;
    this.averageAgeOnEarth = 80;
  }
  mercury(){
    return (this.age * 0.24)
  }
  venus(){
    return (this.age * 0.62)
  }
  mars(){
    return (this.age * 1.88)
  }
  jupiter(){
    return (this.age * 11.86)
  }
}