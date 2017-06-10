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
      "deviceScaleFactor": 0,
      "touch": "false",
      "mobile": "false"
    }
  },
  getRandomAlexa: function() {
    let resolution = getRandomArray(Data.desktops.resolutions).split('x')
    return {
      "deviceName": "Random Alexa",
      "width": resolution[0],
      "height": resolution[1],
      "userAgent": getRandomArray(Data.alexa.userAgents),
      "deviceScaleFactor": 0,
      "touch": "false",
      "mobile": "false"
    }
  },
  getRandomMixed: function() {
    return randomDevice[getRandomArray(Object.keys(randomDevice))]()
  }
}

module.exports = randomDevice;
