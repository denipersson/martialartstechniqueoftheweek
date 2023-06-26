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
      "Ura Nage",
      "Maki Komi Nage",
      "Ura Nage -> Back Position Takedown",
      "Mawashi Uke (roundhouse block - breathing exercise)",
      "Seiken Chudan Tsuki (straight middle punch)",
      "Seiken Ago Uchi (strike punch to chin)",
      "Uraken Ganmen Uchi (reverse snap punch to face)",
      "Kagi Tsuki (hook punch)",
      "Shuto Ganmen Uchi (hand-knife strike to face)",
      "Uchi Shuto Uchi (reverse hand-knife strike to neck)",
      "Shuto Sakotsu Uchi (vertical hand-knife strike to collarbone)",
      "Kin Geri (testicle/groin kick)",
      "Ippon seoinage (一本背負投): Single-handed shoulder throw",
      "Seoi nage (背負投): Shoulder throw",
      "Tai otoshi (体落): Body drop",
      "Uki otoshi (浮落): Floating drop",
      "O goshi (大腰): Full hip throw",
      "Koshi guruma (腰車): Hip wheel",
      "De Ashi Harai (出足払): Advanced foot sweep",
      "Kosoto gari (小外刈): Small outer reap",
      "Kouchi gari (小内刈): Small inner reap",
      "Osoto gari (大外刈): Big outer reap",
      "Ouchi gari (大内刈): Big inner reap",
      "Ashi guruma (足車): Leg wheel",
      "Hiza guruma (膝車): Knee wheel",
      "Sasae tsurikomi ashi (支釣込足): Propping and drawing ankle throw",
      "Uchi mata (内股): Inner-thigh",
      "Sumi otoshi (隅落): Corner drop",
      "Sukui nage (掬投): Scoop throw",
      "Tsurikomi goshi (釣込腰): Lifting and pulling hip throw",
      "Okuri Ashi Harai (送足払): Sliding foot sweep",
      "Harai goshi (払腰): Sweeping hip throw",
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
