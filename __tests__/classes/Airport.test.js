const Airport = require('../Airport');
const Plane = require('../Plane');

describe('Airport class', () => {
    test('assings name and planes array correctly', () => {
        const airport = new Airport('New York');
        expect(airport.name).toBe('New York');
        expect(airport.getPlanes()).toEqual([]);
    });

    test('has a static airportCode', () => {
        expect(Airport.airportCode).toBe('JFK');
    });

    test('adds a plane to the planes array using addPlane()', () => {
        const airport = new Airport('New York');
        const plane = new Plane('Delta', 'LAX', 'NYC');
        airport.addPlane(plane);
        expect(airport.getPlanes()).toContain(plane);
    });
});
