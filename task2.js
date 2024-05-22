const device = {
    type: 'electro',
}

const smartDevice = Object.create(device);
smartDevice.ownType = 'smart';
smartDevice.system = 'Windows';

let str = 'type';

function hasProperty (str, obj)
{
    for (let key in obj) {
        if (key === str) {
            return true;
        }
    }

    return false;
}

console.log(hasProperty(str, smartDevice));
