function Device()
{
    this.type = 'electro';
}

Device.prototype.turnOn = function(isTurned, name) {
    isTurned ? console.log(name + ' is turned on') : console.log(name + ' is turned off'); 
}

Device.prototype.getPower = function(power, name) {
    console.log('Power of ' + name + ' is ' + power + ' Watt');
}

function HouseholdDevice(name)
{
    this.ownType = 'household';
    this.name = name;
}

HouseholdDevice.prototype = new Device();

HouseholdDevice.prototype.getPower = function(power, hours) {
    console.log('Power is ' + power * hours + ' Watt');
}

function SmartDevice(name, operatingSystem) {
    this.ownType = 'smart',
    this.name = name,
    this.operatingSystem = operatingSystem;
}

SmartDevice.prototype = new Device();

SmartDevice.prototype.getSystem = function(operatingSystem) {

}

const electricKettle = new HouseholdDevice('Electric Kettle');
const laptop = new SmartDevice('laptop', 'Windows');

electricKettle.turnOn(true, electricKettle.name);
electricKettle.getPower(1800, 2);
console.log(laptop);

laptop.turnOn(true, laptop.name);
laptop.getPower(100, laptop.name);
console.log(laptop.type, laptop.ownType);