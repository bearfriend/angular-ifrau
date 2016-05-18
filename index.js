angular.module('ifraung', [])

.provider('IfraungClient', function IfraungClientProvider() {

	var Client = window.ifrauclient;
	var options = {};

	this.init = function(_Client, _options) {
		Client = _Client || Client;
		options = _options || options;
	};

	var IfraungClient = function(options) {
		Client.call(this, options);
	}

	this.$get = function ifraungClientFactory() {

		if (!Client) {
			console.error('Missing \'Client\' constructor.');
			return;
		}

		IfraungClient.prototype = Object.create(Client.prototype);
		return new IfraungClient(options);
	};
})

.provider('IfraungHost', function IfraungHostProvider() {

	var Host = window.ifrauhost;
	var params = {};

	this.init = function(_Host, _params) {
		Host = _Host || Host;
		params = params || _params;
	};

	var IfraungHost = function(params) {
		Host.call(this, params);
	}

	this.$get = function ifraungHostFactory() {

		if (!Host) {
			console.error("Missing 'Host' constructor.");
			return;
		}

		IfraungHost.prototype = Object.create(Host.prototype);
		return new IfraungHost(params.parentProvider,params.endpoint,params.options);
	};
});
