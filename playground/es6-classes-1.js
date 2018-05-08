class Person{
    constructor(name= 'Anonnymous',age=0){
        this.name=name;
        this.age=age;
    }

    getGreeting(){
        return `My name is ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }

}

class Student extends Person{
    constructor(name,age,major){
        // call parent constructor
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        // call parent method
        let description=super.getDescription();
        if(this.hasMajor())
        {
            description+=`Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name,age,location)
    {
        super(name,age);
        this.location=location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGreeting(){
        let greeting=super.getGreeting();
        if(this.hasLocation())
        {
            greeting+=`I am visiting from ${this.location}.`
        }
        return greeting;
    }
}

const me=new Traveler('Gaurav',26,'Banglore');
console.log(me.getGreeting());

const other=new Student();  
console.log(other.getGreeting());