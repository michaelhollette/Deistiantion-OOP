class Airport {
    #planes
    static airportCode = 'JFK'
    constructor(name){
        this.name = name
        this.airportCode = Airport.airportCode
        this.#planes = []
    }
    getPlanes(){
        return this.#planes
    }
    addPlane(plane){
        this.#planes.push(plane)
    }
}



module.exports = Airport;