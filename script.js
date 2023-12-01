// 1 UŽDUOTIS

// Naudojant ES5 sintakse sukurkite objekto Filmas (Movie) objekto konstruktoriu, kuris turės šias savybes: name, year, director, budget, income ir pridėkite prototype metodus:
// * getIntroduction(), kuris grąžins filmo pilną pavadinimą (su name, year, director);
// * getProfit(), kuris grąžins sumą, kurią uždirbo (pelną) filmas.


function Movie(name, year, director, budget, income){
    this.name = name
    this.year = year
    this.director = director
    this.budget = budget
    this.income = income
}

Movie.prototype.getIntroduction = function(){
    console.log(`Filmo pavadinimas: ${this.name}. Premjieros metai: ${this.year}. Režisierius: ${this.director}`)
}

Movie.prototype.getProfit = function(){
    console.log(`Pelnas: $${this.income - this.budget}`)
}

const movie1 = new Movie("How the Grinch Stole Christmas", 2000, "Ron Howard", 123000000, 345000000 )

movie1.getIntroduction()
movie1.getProfit()



// 2.1 UŽDUOTIS

// Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car), kuris turės šias savybes: marke, model, year
// ir metodus:

// * getIntroduction(), kuris grąžins pilną pavadinimą (su marke ir model).

// * getAge(), kuris gražins “10 metų arba naujesnis”, jei automobilio amžius yra 10 metų arba naujesnis 
// arba “11 metų arba senesnis”, jei automobilio amžius yra 11 metų arba senesnis (šio metodo logikai naudokite ternary operatorių ir Date() metodą).


class Car {
    constructor(marke, model, year){
        this.marke = marke
        this.model = model
        this.year = year
    }

    getIntroduction(){
        console.log(`Automobilio markė: ${this.marke}. Modelis: ${this.model}`)
    }

    getAge(){
        
        const carAge = (`${year - this.year}`)
        console.log(carAge)
        var age = carAge
        age <= 10 ? console.log("10 metų arba naujesnis") : console.log("11 metų arba senesnis")
       
    }
}
const date = new Date();
let year = date.getFullYear()

const car1 = new Car("Mitsubishi", "Outlander PHEV", 2022)
car1.getIntroduction()
car1.getAge()


// 2.2 UŽDUOTIS

// Naudojant ES6 subklases sukurkite motociklų objektų kūrimo konstruktorių (Motorcycle), kuris turės visas automobilių objektų kūrimo konstruktorių (Car) savybes ir metodus ir papildomai šią savybę: wheels (kurio vertė bus number) ir metodą. Ir metodą: 

// * getWheelsNumber(), kuris grąžins “motociklas turi tris ratus”, jei wheels vertė bus 3 ir “motociklas turi du ratus”, jei wheels vertė bus 2 (šio metodo logikai naudokite else if operatorių arba switch).

// Testavimui, sukurkite du objektus, kurie turės nurodytas savybes ir metodus.



class Motorcycle extends Car {
    constructor(marke, model, year, wheels){
         super(marke, model, year );
         this.wheels = wheels;
    }

   getWheelsNumber(){
       switch (this.wheels) {
       case 2: 
       console.log("Motociklas turi du ratus");
       break; 
       case 3:
       console.log("Motociklas turi tris ratus");
       break; 
    }
   }
}

const motorcycle1 = new Motorcycle("Royal Enfield", "Bullet", 1960, 2)
const motorcycle2 = new Motorcycle("Can-Am", "Spyder RT", 2023, 3)

motorcycle1.getWheelsNumber()
motorcycle2.getWheelsNumber()




