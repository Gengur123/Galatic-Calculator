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

    test('Should return the persons age if they were on Mercury and life expected on that planet',  () => {
      age.mercury();
      expect(age.planetAge).toEqual(7);
      age.lifeExpectancy();
      expect(age.expectedLife).toEqual(73)
    });

    test('Should return the persons age if they were on Venus and life expected on that planet',  () => {
      age.venus();
      expect(age.planetAge).toEqual(18);
      age.lifeExpectancy();
      expect(age.expectedLife).toEqual(62)
    });

    test('Should return the persons age if they were on Mars and life expected on that planet',  () => {
      age.mars();
      expect(age.planetAge).toEqual(56);
      age.lifeExpectancy();
      expect(age.expectedLife).toEqual(24)
    });

    test('Should return the persons age if they were on Jupiter and life expected on that planet',  () => {
      age.jupiter();
      expect(age.planetAge).toEqual(355);
      age.lifeExpectancy();
      expect(age.expectedLife).toEqual("275 Woah you lived past your life expectancy")
    });
});