class Device
{
    constructor (name, power) {
        this.name = name;
        this.power = power;
        this.type = 'electro';
    }

    turnOn(isTurned) {
        return isTurned ? this.name + ' is turned on' : this.name + ' is turned off' ;
    }

    getPower() {
        return 'Power of ' + this.name + ' is ' + this.power + ' Watt';
    }
}

class HouseholdDevice extends Device
{
    constructor (hours, name, power) {
        super(name, power);
        this.ownType = 'household';
        this.hours = hours;
    }

    getPower() {
        return 'Power is ' + super.power * this.hours + ' Watt';
    }
}

class SmartDevice extends Device
{
    constructor (operatingSystem, name, power) {
        super(name, power);
        this.ownType = 'smart';
        this.operatingSystem = operatingSystem;
    }
}

const kettle = new HouseholdDevice(2, 'Electric Kettle', 1800);
const laptop = new SmartDevice('Windows', 'laptop', 100);

console.log(kettle);
kettle.turnOn(true);
kettle.getPower();
kettle.turnOn(false);
console.log(kettle.type, kettle.ownType);

console.log(laptop);
laptop.turnOn(true);
laptop.getPower();
laptop.turnOn(false);
console.log(laptop.type, laptop.ownType);