import * as logger from 'firebase-functions/logger';
import { auth, config } from 'firebase-functions';
import { firestore } from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

initializeApp(config().firebase);

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const onUserCreate = auth.user().onCreate(async (user) => {
    logger.info('User created', user);

    const userRole = {
        role: 'customer',
    };

    try {
        await getAuth().setCustomUserClaims(user.uid, userRole);
    } catch (error) {
        console.log(error);
    }

    await firestore().doc(`users/${user.uid}`).create(userRole);
});
