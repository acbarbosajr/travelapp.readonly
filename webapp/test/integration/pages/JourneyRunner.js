sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"travelapp/readonly/test/integration/pages/ConnectionList",
	"travelapp/readonly/test/integration/pages/ConnectionObjectPage",
	"travelapp/readonly/test/integration/pages/FlightObjectPage"
], function (JourneyRunner, ConnectionList, ConnectionObjectPage, FlightObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('travelapp/readonly') + '/test/flp.html#app-preview',
        pages: {
			onTheConnectionList: ConnectionList,
			onTheConnectionObjectPage: ConnectionObjectPage,
			onTheFlightObjectPage: FlightObjectPage
        },
        async: true
    });

    return runner;
});

