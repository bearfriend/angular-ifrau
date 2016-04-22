angular.module('angular-ifrau', [])

.provider('AppHost', function AppHostProvider() {

	var conf = {};
	var client;
	var connected = false;

	function init(_client) {
		client = _client;
	}

	this.init = init;

	this.$get = function AppHostFactory() {

		function AppHost() {

			function connect() {
				var p = client.connect();
				connected = true;
				return p;
			}

			function sendEvent(eventName, payload) {
				client.sendEvent(eventName, payload);
			}

			function sendMessage(level, message) {
				sendEvent('message', {
					level: level,
					message: message
				});
			}

			function request(type, options) {
				return client.request(type, options);
			}

			function navigate(url) {
				client.navigate(url);
			}

			function getService(serviceType, version) {
				return client.getService(serviceType, version);
			}

			this.sendEvent = sendEvent;
			this.sendMessage = sendMessage;
			this.conf = conf;
			this.navigate = navigate;
			this.connect = connect;
			this.request = request;
			this.getService = getService;
		}

		return new AppHost();
	};
});
