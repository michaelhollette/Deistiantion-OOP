const Person = require('../Person');
const Bag = require('../Bag');

describe('Person class', () => {
    test('creates an instance of Person', () => {
        const person = new Person('John Doe', 'NYC');
        expect(person).toBeInstanceOf(Person);
    });

    test('assings name and destination correctly', () => {
        const person = new Person('John Doe', 'NYC');
        expect(person.name).toBe('John Doe');
        expect(person.destination).toBe('NYC');
    });

    test('initializes bags as an empty array', () => {
        const person = new Person('John Doe', 'NYC');
        expect(person.getBags()).toEqual([]);
    });

    test('adds a bag to the bags array using addBag()', () => {
        const person = new Person('John Doe', 'NYC');
        const bag = new Bag(20, 'B123');
        person.addBag(bag);
        expect(person.getBags()).toContain(bag);
    });
});
