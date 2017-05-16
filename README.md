# RAML1 JSON OUTPUT TYPINGS
This repository contains typings on top of JSON serialization of [RAML1 JS Parser](https://github.com/raml-org/raml-js-parser-2/)

In other words this contains typings for the things that you may obtain by calling `toJSON` method on the RAML1 Parser results.

```javascript
var api = raml.loadApiSync(fName);
console.log(JSON.stringify(api.toJSON(), null, 2));
```
