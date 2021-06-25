import newAge from "../src/ageChecker";

describe("newAge",() =>{
  let age

  beforeEach(() => {
    age = new newAge(30)
  });

  test('Should return the age',  () => {
    expect(age.age).toEqual(30);

  });

});