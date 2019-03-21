  var id = idensic.init(
    // selector of the WebSDK container (see above)
    '#idensic',
    // configuration object (see the settings in demo)
    {
      // provide your clientId (can be seen in the demo)
      "clientId": " Grapefruit Trading",
      "requiredIdDocs": { "docSets": [ { "idDocSetType": "APPLICANT_DATA", "fields": [ { "name": "firstName", "required": true }, { "name": "lastName", "required": true } ] }, { "idDocSetType": "IDENTITY", "types": [ "ID_CARD", "PASSPORT", "DRIVERS" ] }, { "idDocSetType": "SELFIE", "types": [ "SELFIE" ] }, { "idDocSetType": "PROOF_OF_RESIDENCE", "types": [ "UTILITY_BILL" ], "fields": [ { "name": "street" }, { "name": "subStreet" }, { "name": "buildingNumber" }, { "name": "flatNumber" }, { "name": "town" }, { "name": "state" }, { "name": "postCode" }, { "name": "country" } ] }, { "idDocSetType": "INVESTABILITY", "types": [ "INCOME_SOURCE", "COMPANY_DOC" ] }, { "idDocSetType": "ACCREDITED_INVESTOR", "types": [ "INVESTOR_DOC" ] } ] }, "navConf": { "showWelcomeScreen": true }, "uiConf": { "customCss": "", "lang": "en", "steps": { "APPLICANT_REQUEST": { "title": "", "button": "" }, "CREATE_APPLICANT": { "instructions": "", "title": "" }, "APPLICANT_DATA": { "videoRequired": "disabled" }, "IDENTITY": { "title": "Identity document", "videoRequired": "disabled" }, "SELFIE": { "videoRequired": "disabled" }, "PROOF_OF_RESIDENCE": { "videoRequired": "disabled" }, "INVESTABILITY": { "videoRequired": "disabled" }, "ACCREDITED_INVESTOR": { "videoRequired": "disabled" }, "STATUS": { "pending": { "title": "", "instructions": "" }, "success": { "title": "", "instructions": "" } } } }
    },
    // function for the WebSDK callbacks
     function (messageType, payload) {
       // e.g. just logging the incoming messages
       console.log('[IDENSIC DEMO] Idensic message:', messageType, payload);
     }
  )
