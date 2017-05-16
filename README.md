# RAML1 JSON OUTPUT TYPINGS
This repository contains typings on top of JSON serialization of [RAML1 JS Parser](https://github.com/raml-org/raml-js-parser-2/)

In other words this contains typings for the things that you may obtain by calling `toJSON` method on the RAML1 Parser results.

```javascript
var api = raml.loadApiSync(fName);
console.log(JSON.stringify(api.toJSON(), null, 2));
```

one typical usage will be casting JSON serialization to one of fragment interfaces declared in this typings.

```javascript
import r1=require("raml1-json-typings")
type Api=r1.Api;
...

var api = <Api>raml.loadApiSync(fName).toJSON();

```javascript

