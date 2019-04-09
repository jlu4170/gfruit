
  var id = idensic.init(
        '#idensic',
    {
    "clientId": "Grapefruit Trading",
    "requiredIdDocs": {
      
        "docSets": [{
          "idDocSetType": "INVESTABILITY", 
            "types": [ "COMPANY_DOC" ],
            "fields": null
          },
          {
            "idDocSetType": "APPLICANT_DATA",
            "fields": [{
                "name": "firstName",
                "required": true
            }, {
                "name": "lastName",
                "required": true
            }]
        }, {
            "idDocSetType": "IDENTITY",
            "types": ["ID_CARD", "PASSPORT", "DRIVERS"]
        }, {
            "idDocSetType": "PROOF_OF_RESIDENCE",
            "types": ["UTILITY_BILL"],
            "fields": [{
                "name": "street"
            }, {
                "name": "subStreet"
            }, {
                "name": "buildingNumber"
            }, {
                "name": "flatNumber"
            }, {
                "name": "town"
            }, {
                "name": "state"
            }, {
                "name": "postCode"
            }, {
                "name": "country"
            }]
        }]
    },
    "navConf": {
        "showWelcomeScreen": true
    },
    "uiConf": {
        "customCss": "",
        "lang": "en",
        "steps": {
            "APPLICANT_REQUEST": {
                "title": "",
                "button": ""
            },
            "CREATE_APPLICANT": {
                "instructions": "",
                "title": ""
            },
            "APPLICANT_DATA": {
                "videoRequired": "disabled"
            },
            "IDENTITY": {
                "title": "Identity document",
                "videoRequired": "disabled"
            },
            "SELFIE": {
                "videoRequired": "disabled"
            },
            "PROOF_OF_RESIDENCE": {
                "videoRequired": "disabled",
                "stepName":"Proof of Residence"

            },
            "INVESTABILITY": {
                "videoRequired": "disabled",
                "stepName":"Counterparty Type"
            },
            "ACCREDITED_INVESTOR": {
                "videoRequired": "disabled"
              
            },
            "STATUS": {
                "pending": {
                    "title": "",
                    "instructions": ""
                },
                "success": {
                    "title": "",
                    "instructions": ""
                }
            }
        }
    }
})
