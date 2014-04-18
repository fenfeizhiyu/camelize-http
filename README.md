camelize-http
-------------

This tiny AngularJS module acts as a wrapper around the angular core $http service, with the single responsibility of eliminating the discrepancy between underscored_keys from backends (e.g. Python, Ruby) and camelizedKeys in the front-end.

## Installation using Bower

Note: this is a work in progress. Installing it right now will get you an empty module.

    $ bower install camelize-http

## Quick Start

#### Step 1

Include the module (after angular.js)

```html
<script src="/path/to/camelize-http.js"></script>
```

#### Step 2

Tell your angular app that it depends on the module

```javascript
angular.module('YourApp', ['camelizeHttp']);
```

#### Step 3

Inject the cHttp wrapper into an angular component

```javascript
angular.module('YourApp').service('SomeComponent', function(cHttp) {
    // ...
});
```

## Usage Examples

Once you have the wrapper, use it as you would use the core $http service

#### GET

```javascript
cHttp.get('/some-endpoint').success(function(response) {
    // The original response from the server contains underscored_keys, 
    // but the response received here has been converted to camelizedKeys
});
```

#### POST

```javascript
var data = { camelizedKey: 42 };

// Although the post params are camel case,
// the server will receive data as { camelized_key: 42 };
cHttp.post('/some-endpoint', data).success(function(response) {
    // And the response is still converted to camel case
});
```
