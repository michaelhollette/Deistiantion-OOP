const Bag = require('../Bag');

describe('Bag class', () => {
    test('creates an instance of Bag', () => {
        const bag = new Bag(20, 'B123');
        expect(bag).toBeInstanceOf(Bag);
    });

    test('assings weight and id correctly', () => {
        const bag = new Bag(20, 'B123');
        expect(bag.weight).toBe(20);
        expect(bag.id).toBe('B123');
    });

    test('has an owner initialized as null', () => {
        const bag = new Bag(20, 'B123');
        expect(bag.getOwner()).toBeNull();
    });

    test('assings an owner using assignOwner()', () => {
        const bag = new Bag(20, 'B123');
        const person = { name: 'John Doe' }; 
        bag.assignOwner(person);
        expect(bag.getOwner()).toBe(person);
    });
});
