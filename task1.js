const device = {
    type: 'electro',
}

const smartDevice = Object.create(device);
smartDevice.ownType = 'smart';
smartDevice.system = 'Windows';

console.log(smartDevice);

function getOwnProperties(obj)
{
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ': ' + obj[key]);
        }
    }
}

getOwnProperties(smartDevice);
