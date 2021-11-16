let person = {
    firstName: 'Benjamin',
    lastName: 'Bird',
    age: 23
}

// console.log(person.firstName);
// console.log(person['firstName']);

let meal = {
    appetizer: 'Rolls',
    entree: 'Steak',
    dessert: 'Cake',
    drink: 'Water'
}

const {dessert, appetizer} = meal;

// console.log(dessert, appetizer);

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal;

// console.log(myAppetizer, myEntree, myDessert, myDrink);
// console.log(meal);

for(let key in person){
    console.log(key);
    console.log(person[key]);
}

person.job = 'Student';
person.age = 23;

person['car'] = 'white';

delete person.car;
// console.log(person);

class Dog {
    constructor(dogName, dogBreed, dogAge){
        this.name = dogName;
        this.breed = dogBreed;
        this.age = dogAge;
        this.favoriteToys = [];
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}.`);
    }

    addToy(toy){
        this.favoriteToys.push(toy);
    }
}

class Puppy extends Dog {
    constructor(dogName, dogBreed, dogAge){
        super(dogName, dogBreed, dogAge);

        this.trainingLevel = 0;
        this.isShedding = false;
    }

    levelUp(num){
        this.trainingLevel += num;
    }

    toggleShedding() {
        this.isShedding = !this.isShedding;
    }

    addToy(toy){
        super.addToy(toy);
        console.log(this.favoriteToys);
    }
}

let lassie = new Dog('Lassie', 'Collie', 18);
console.log(lassie);

let beethoven = new Dog('Beethoven', 'St. Bernard', 18);

let chief = new Puppy('Chief', 'Husky', 1);

chief.levelUp(5)
console.log(chief);

chief.addToy('bone');
chief.addToy('rubber duck');

console.log(Object.getOwnPropertyNames(chief));