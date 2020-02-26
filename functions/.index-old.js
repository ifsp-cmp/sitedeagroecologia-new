const functions = require('firebase-functions');
const admin = require('firebase-admin');
const SENDGRID_API_KEY = functions.config().sendgrid.key;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

exports.firestoreEmail = () => {
        const msg = {
            // to: user.email,
            to: 'albordignon@gmail.com',
            from: 'albordignon@gmail.com',
            subject: 'Novo parceiro(a)',
            templateId: 'd-fcc6a21e08e04d918bd5814b50a7e22b',
            substitutionWrappers: ['{{', '}}'],
            substitutions: {
                name: 'André' 
            };
        return sgMail.send(msg);
 };




// exports.firestoreEmail = functions.firestore
// .document('users/{userId}')
// .onCreate(event => {
//     //const userId = event.params.userId;
//     // console.log(event.params);
//     console.log(event);
//     const db=admin.firestore();
//     return db.collection('users').doc(1)
//     .get()
//     .then(doc => {
//         const user = doc.data()
//         const msg = {
//             // to: user.email,
//             to: 'albordignon@gmail.com',
//             from: 'albordignon@gmail.com',
//             subject: 'Novo parceiro(a)',
//             templateId: 'd-fcc6a21e08e04d918bd5814b50a7e22b',
//             substitutionWrappers: ['{{', '}}'],
//             substitutions: {
//                 name: 'André' 
//             }
//         };
//         return sgMail.send(msg);
//     })
//     .then(() => console.log('Message sent.'))
//     .catch(err => console.log(err))
// });



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

















//Email template id: fcc6a21e08e04d918bd5814b50a7e22b