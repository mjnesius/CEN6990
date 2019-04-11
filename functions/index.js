const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.checkAlias = functions.https.onCall((data, context) => {
  const ref = admin
    .firestore()
    .collection("users")
    .doc(data.slug);
  return ref
    .get()
    .then(doc => {
      return { unique: !doc.exists };
    })
    .catch(err => {
      throw new functions.https.HttpsError("failed to connect");
    });
});

exports.countNameChanges = functions.firestore
  .document("users/{slug}")
  .onUpdate((change, context) => {
    const data = change.after.data();
    const previousData = change.before.data();
    let ref = admin
      .firestore()
      .collection("trending")
      .doc(data.history[0].id);
    return ref.get().then(doc => {
      let newCount = 1;
      if (doc.exists) {
        newCount = doc.data().count + 1;
      }
      ref
        .set({
          title: data.history[0].title,
          instructor: data.history[0].instructor,
          count: newCount
        })
        .catch(error => {});
    });
  });
