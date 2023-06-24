import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import * as admin from "firebase-admin";

admin.initializeApp();

exports.updateTechnique = functions.pubsub
  .schedule("every monday 00:00")
  .onRun(async (context) => {
    const techniques = [
      "Mae Geri (Front Kick)",
      "Mawashi Geri (Roundhouse Kick)",
      "Yoko Geri (Side Kick)",
      "Ushiro Geri (Back Kick)",
      "Hiza Geri (Knee Kick)",
      "Ashi Barai (Foot Sweep)",
      "Osoto Gari (Major Outer Reap)",
      "Seiken Tsuki (Forefist Punch)",
      "Sokuto Geri (Knife Foot Kick)",
      "Kaiten Mawashi Geri (Tornado Kick)",
      "Spinning technique of choice!",
      "Triple punch combination",
      "Double punch combination",
      "Double kick combination",
      "Triple kick combination",
      "Shita Tsuki (Body Punch)",
      "Gyaku Tsuki (Reverse Punch)",
      "Kansetsu Geri (Joint Kick)",
      "Hiji Uchi (Elbow Strike)",
      "Shotei Uchi (Palm Heel Strike)",
      "Ude Uchi (Forearm Strike)",
      "Shuto Uke (Knife Hand Block)",
      "Nukite (Spear Hand)",
      "Kakato Otoshi Geri (Axe Kick)",
      "Jodan Tsuki (Face Punch)",
      "Gedan Barai (Lower Sweep)",
      "Nidan Geri (Double Kick)",
      "Shita Tsuki (Lower Punch)",
      "Oi Tsuki (Lunge Punch)",
      "Mae Tobi Geri (Jump Front Kick)",
      "Yama Tsuki (Mountain Punch)",
      "Mikazuki Geri (Crescent Kick)",
      "Harai Goshi (Sweeping Hip Throw)",
      "Teep (Push Kick)",
      "Jab",
      "Cross",
      "Hook",
      "Uppercut",
      "Elbow Slash",
      "Horizontal Elbow",
      "Uppercut Elbow",
      "Forward Elbow Thrust",
      "Reverse Horizontal Elbow",
      "Jab",
      "Cross",
      "Hook",
      "Uppercut",
      "Overhand",
      "Short Straight Punch",
      "Corkscrew Uppercut",
    ];

    const randomTechnique =
      techniques[Math.floor(Math.random() * techniques.length)];

    try {
      const docRef = admin.firestore().doc("technique/current");
      await docRef.set({
        name: randomTechnique,
        date: admin.firestore.Timestamp.now(),
      });
      console.log("Technique updated successfully");
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  });
