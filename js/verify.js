  var id = idensic.init(
    // selector of the WebSDK container (see above)
    '#idensic',
    // configuration object (see the settings in demo)
    {
      // provide your clientId (can be seen in the demo)
      "clientId": " Grapefruit Trading",
      // maybe some additional parameters, see the Demo to see which ones, e.g.
      "externalUserId": "someUserIdInYoursystem"
    },
    // function for the WebSDK callbacks
     function (messageType, payload) {
       // e.g. just logging the incoming messages
       console.log('[IDENSIC DEMO] Idensic message:', messageType, payload);
     }
  )
