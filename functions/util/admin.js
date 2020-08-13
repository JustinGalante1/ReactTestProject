var admin = require("firebase-admin");

var serviceAccount = require("./testproject-bc5d5-firebase-adminsdk-bipp8-31b130adc8.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://testproject-bc5d5.firebaseio.com"
});

const db = admin.firestore()

module.exports = {admin, db};