const exercices = require("../src/exercices");

// Exercice 1
test("La fonction canVote(16) retourne false", () => {
  expect(exercices.canVote(16)).toEqual(false);
});
test("La fonction canVote(18) retourne true", () => {
  expect(exercices.canVote(18)).toEqual(true);
});
test("La fonction canVote(20) retourne true", () => {
  expect(exercices.canVote(20)).toEqual(true);
});

// Exercice 2
test('La fonction isOdd(7) retourne la phrase "Le nombre est impair"', () => {
  expect(exercices.isOdd(4)).toEqual("Le nombre est impair");
});
test('La fonction isOdd(7) retourne la phrase "Le nombre est pair"', () => {
  expect(exercices.isOdd(4)).toEqual("Le nombre est pair");
});

// Exercice 3
test('La fonction rateGrade(6) retourne la phrase "Très bien"', () => {
  expect(exercices.rateGrade(6)).toEqual("Très bien");
});
test('La fonction rateGrade(5.5) retourne la phrase "Très bien"', () => {
  expect(exercices.rateGrade(5.5)).toEqual("Très bien");
});
test('La fonction rateGrade(5) retourne la phrase "Bien"', () => {
  expect(exercices.rateGrade(5)).toEqual("Bien");
});
test('La fonction rateGrade(4.5) retourne la phrase "Bien"', () => {
  expect(exercices.rateGrade(4.5)).toEqual("Bien");
});
test('La fonction rateGrade(4) retourne la phrase "Assez bien"', () => {
  expect(exercices.rateGrade(4)).toEqual("Assez bien");
});
test('La fonction rateGrade(3.5) retourne la phrase "Insuffisant"', () => {
  expect(exercices.rateGrade(3.5)).toEqual("Insuffisant");
});
test('La fonction rateGrade(3) retourne la phrase "Insuffisant"', () => {
  expect(exercices.rateGrade(3)).toEqual("Insuffisant");
});
test('La fonction rateGrade(2.5) retourne la phrase "Insuffisant"', () => {
  expect(exercices.rateGrade(2.5)).toEqual("Insuffisant");
});
test('La fonction rateGrade(2) retourne la phrase "Insuffisant"', () => {
  expect(exercices.rateGrade(2)).toEqual("Insuffisant");
});
