import { v4 as uuid } from 'uuid';

class Car {
    constructor(brand, model, year, km){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.km = km;
        this.id = uuid() ;
    } 
    kmPerYear() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year + 1;
        return this.km / age;
    }
}

export default Car;