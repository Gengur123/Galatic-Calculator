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
      age.mercury();
      expect(age.planetAge).toEqual(7);
    });

    test('Should return the persons age if they were on Venus',  () => {
      age.venus();
      expect(age.planetAge).toEqual(18);
    });

    test('Should return the persons age if they were on Mars',  () => {
      age.mars();
      expect(age.planetAge).toEqual(56);
    });

    test('Should return the persons age if they were on Jupiter',  () => {
      age.jupiter();
      expect(age.planetAge).toEqual(355);
    });
});