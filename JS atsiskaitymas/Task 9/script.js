/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return this.budget > 100000000;
  }
}

const movie1 = new Movie('Avatar', 'James Cameron', 290000000);
const movie2 = new Movie('Mes dar gyvi', 'Jonas Vaitkus', 100000);
const movie3 = new Movie('Kai apkabinsiu tave', 'Agnė Marcinkevičiūtė', 500000);

console.log(movie1.wasExpensive()); 
console.log(movie2.wasExpensive()); 
console.log(movie3.wasExpensive()); 