
  var id = idensic.init(
        '#idensic',
    {
    "clientId": "Grapefruit Trading",
    "externalUserId": "random-le5i7mo3dk",
    "accessToken": "_act-6deb92ee-1719-4b31-b212-6d4e0fcb04a1",
    "requiredIdDocs": {
      
        "docSets": [
          {
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
