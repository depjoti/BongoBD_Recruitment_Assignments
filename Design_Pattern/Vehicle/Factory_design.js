
//Main factory class
class VehicleFactory{
    constructor(_wheels,_passengers,_gas=true){
        this.set_num_of_wheels=_wheels;
        this.set_num_of_passengers=_passengers;
        this.has_gas=_gas;
    }
    
}
//Car Class 
class Car extends VehicleFactory{
    constructor(_wheels,_passengers,_gas){
        super(_wheels,_passengers,_gas);
    }
    info(){
        console.log('The car has', this.set_num_of_wheels,'wheels and', this.set_num_of_passengers,'passengers and the car has gas',this.has_gas); 
    }
}
//Plane class
class Plane extends VehicleFactory{
    constructor(_wheels,_passengers,_gas){
        super(_wheels,_passengers,_gas);
    }
    info(){
        console.log('The plane has', this.set_num_of_wheels,'wheels and', this.set_num_of_passengers,'passengers and the plane has gas',this.has_gas); 
    }
}

//Car
let ferrari = new Car(4,5,true);
ferrari.info();

//Plane
let biman = new Plane(2,50,false);
biman.info();