class Plane {
    #passengers
    constructor(company,origin, destination){
        this.company = company;
        this.origin = origin;
        this.destination = destination
        this.#passengers = []
    }
    getPassengers(){
        return this.#passengers
    }
    addPassengers(passenger){
        this.#passengers.push(passenger)
    }


}


module.exports = Plane;