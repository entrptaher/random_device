# Usage:

`yarn add https://github.com/entrptaher/random_device.git`
and
`let randomDevice = require("random_device")`

### randomDevice.getRandomMobile()


```
{ deviceName: 'LG Optimus One',
  width: 213,
  height: 320,
  deviceScaleFactor: 1.5,
  userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; LG-MS690 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
  touch: true,
  mobile: true }
```
### randomDevice.getRandomTablet()

```
{ deviceName: 'Google Nexus 7 2',
  width: 960,
  height: 600,
  deviceScaleFactor: 2,
  userAgent: 'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.72 Safari/537.36',
  touch: true,
  mobile: true }
```

### randomDevice.getRandomDesktop()

```
{ deviceName: 'Random Desktop',
  width: '1680',
  height: '1050',
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
  touch: 'false',
  mobile: 'false' }
```
