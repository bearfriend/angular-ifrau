angular.module('ifraung', [])

.provider('AppHost', function AppHostProvider() {

	var client;
	var connected = false;

	this.init = function(_client) {
		client = _client;
	};

	this.$get = function AppHostFactory() {

		function AppHost() {

			function connect() {
				return client.connect().then(function() {
					connected = true;
				});
			}

			function sendMessage(level, message) {
				sendEvent('message', {
					level: level,
					message: message
				});
			}

			this.sendEvent = client.sendEvent;
			this.sendMessage = sendMessage;
			this.navigate = client.navigate;
			this.connect = client.connect;
			this.request = client.request;
			this.getService = client.getService;
		}

		return new AppHost();
	};
});
