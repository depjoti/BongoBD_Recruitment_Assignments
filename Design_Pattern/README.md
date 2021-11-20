# Bongo's Frontend Developer Position Assigment 
## Problem 
Explain the design pattern used in following:
~~~
interface common.Vehicle {
int set_num_of_wheels()
int set_num_of_passengers()
boolean has_gas()
}
~~~
- Explain how can you use the pattern to create car and plane class?
- Use a different design pattern for this solution.

#### Task
- Cretae Car and Plane class.
- Use another design pattern.

#### Cretae Car and Plane class
- Car class
~~~javascript

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
~~~

- Plane class
~~~javascript

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
~~~
### In factory design pattern
- Create a factory 
~~~javascript

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
~~~
- Run the factory
~~~javascript 

//Car
let ferrari = new Car(4,5,true);
ferrari.info();

//Plane
let biman = new Plane(2,50,false);
biman.info();
~~~