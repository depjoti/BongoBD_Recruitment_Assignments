
//Car Class
class Car{
    
    constructor(_wheels,_passengers,_gas=true){
        this.set_num_of_wheels=_wheels;
        this.set_num_of_passengers=_passengers;
        this.has_gas=_gas;
    }
    get wheels(){
        return this.set_num_of_wheels;
    }
    get passengers(){
        return this.set_num_of_passengers;
    }
    get gas(){
        return this.has_gas;
    }

    info(){
        console.log('The car has', this.wheels,'wheels and', this.passengers,'passengers and the car has gas',this.gas); 
    }

}

//Plane Class
class Plane{
    constructor(_wheels,_passengers,_gas=true){
        this.set_num_of_wheels=_wheels;
        this.set_num_of_passengers=_passengers;
        this.has_gas=_gas;
    }
    get wheels(){
        return this.set_num_of_wheels;
    }
    get passengers(){
        return this.set_num_of_passengers;
    }
    get gas(){
        return this.has_gas;
    }

    info(){
        console.log('The plane has', this.wheels,'wheels and', this.passengers,'passengers and the plane has gas',this.gas); 
    }
}

//Car
let ferrari = new Car(4,5,true);
ferrari.info();

//Plane
let biman = new Plane(2,50,false);
biman.info();
