class Vehicle{
    constructor(_wheels,_passengers,_gas=true){
        this.num_of_wheels=_wheels;
        this.num_of_passengers=_passengers;
        this.has_gas=_gas;
    }
    get wheels(){
        return this.num_of_wheels;
    }
    set wheels(_wheels){
        this.num_of_wheels=_wheels
    }

    get passengers(){
        return this.num_of_passengers;
    }

    set passengers(_passengers){
        this.num_of_passengers=_passengers;
    }
    
    get gas(){
        return this.has_gas;
    }

    set gas(_gas){
        this.has_gas=_gas;
    }


    

    
}

//Car Class
class Car extends Vehicle{
    constructor(_wheels,_passengers,_gas){
        super(_wheels,_passengers,_gas);
    }

    info(){
        console.log('The car has', this.wheels,'wheels and', this.passengers,'passengers and the car has gas',this.gas); 
    }

}

//Plane Class
class Plane extends Vehicle{
    constructor(_wheels,_passengers,_gas){
        super(_wheels,_passengers,_gas);
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
