export default class newAge {
  constructor(age) {
    this.age = age;
    this.ageInDays = age * 365;
    this.averageAgeOnEarth = 80;
  }
  mercury(){
    return (this.age * 0.24)
  }
}