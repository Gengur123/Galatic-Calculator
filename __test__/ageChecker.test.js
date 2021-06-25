import newAge from "../src/ageChecker";

describe("newAge",() => {

  let age;

    beforeEach(() => {
      age = new newAge(30);
    });

    test('Should return the age',  () => {
      expect(age.age).toEqual(30);
    });
    test('Should return the age',  () => {
      expect(age.ageInDays).toEqual(10950);
    });

    test('Should return the medium age',  () => {
      expect(age.averageAgeOnEarth).toEqual(80);
    });

    test('Should return the persons age if they were on Mercury',  () => {
      expect(age.mercury()).toEqual(7.199999999999999);
    });

    test('Should return the persons age if they were on Mercury',  () => {
      expect(age.venus()).toEqual(18.6);
    });
    
});