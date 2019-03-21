
  var id = idensic.init(
        '#idensic',
    {
    "clientId": "Grapefruit Trading",
    "requiredIdDocs": {
        "docSets": [{
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
            "idDocSetType": "SELFIE",
            "types": ["SELFIE"]
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
        }, {
            "idDocSetType": "INVESTABILITY",
            "types": ["INCOME_SOURCE", "COMPANY_DOC"]
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
                "videoRequired": "disabled"
            },
            "INVESTABILITY": {
                "videoRequired": "disabled"
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
