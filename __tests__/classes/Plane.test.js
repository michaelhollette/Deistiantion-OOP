const Plane = require('../Plane');
const Person = require('../Person');

describe('Plane class', () => {
    test('assigns company, origin, and destination correctly', () => {
        const plane = new Plane('Delta', 'LAX', 'NYC');
        expect(plane.company).toBe('Delta');
        expect(plane.origin).toBe('LAX');
        expect(plane.destination).toBe('NYC');
    });

    test('initializes passengers as an empty array', () => {
        const plane = new Plane('Delta', 'LAX', 'NYC');
        expect(plane.getPassengers()).toEqual([]);
    });

    test('adds a passenger to the passengers array using addPassenger()', () => {
        const plane = new Plane('Delta', 'LAX', 'NYC');
        const person = new Person('John Doe', 'NYC');
        plane.addPassenger(person);
        expect(plane.getPassengers()).toContain(person);
    });
});
