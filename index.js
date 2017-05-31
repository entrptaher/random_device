var Data = require('./data.json');

function getRandomArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let randomDevice = {
  getRandomMobile: function() {
    return getRandomArray(Data.mobiles)
  },
  getRandomTablet: function() {
    return getRandomArray(Data.tablets)
  },
  getRandomDesktop: function() {
    let resolution = getRandomArray(Data.desktops.resolutions).split('x')
    return {
      "deviceName": "Random Desktop",
      "width": resolution[0],
      "height": resolution[1],
      "userAgent": getRandomArray(Data.desktops.userAgents),
      "touch": "false",
      "mobile": "false"
    }
  }
}

console.log(randomDevice.getRandomMobile())
console.log(randomDevice.getRandomTablet())
console.log(randomDevice.getRandomDesktop())

module.exports = randomDevice;
