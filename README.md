# ifraung

Angular services for [ifrau](https://github.com/Brightspace/ifrau) host and client.

## Setup

```` javascript
// Add ifraung as a dependency to your app
angular.module('myApp', ['ifraung']);

// Inject IfraungClient
angular.module('myApp').run(function($rootScope, IfraungClient) {
  // ...
});

// Or inject IfraungHost
angular.module('myApp').directive('frapp',function($http, IfraungHost) {
  // ...
});

````

## Initialization

*Initialize a host:*

```` javascript
var Host = require('ifrau/host');

angular.module('myApp').config(function(IfraungHostProvider) {

  // ...

  IfraungHostProvider.init(Host,ifrauHostParams);

});
````

`Host` Optional. The ifrau host constructor. If not provided, the global `ifrauhost` will be used instead.

`ifrauHostParams` An object containing [ifrau host parameters](https://github.com/Brightspace/ifrau#host-and-client).

*Initialize a client:*

```` javascript
var Client = require('ifrau/client');

angular.module('myApp').config(function(IfraungClientProvider) {

  // ...

  IfraungClientProvider.init(Client,ifrauClientOptions);

});
````

`Client` Optional. The ifrau client constructor. If not provided, the global `ifrauclient` will be used instead.

`ifrauClientOptions` Optional, An object containing [ifrau client options](https://github.com/Brightspace/ifrau#host-and-client).
