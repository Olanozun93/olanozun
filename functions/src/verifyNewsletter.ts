// functions/src/verifyNewsletter.ts
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const verifyNewsletter = functions.https.onRequest(async (req, res) => {
  try {
    const { token, email } = req.query;

    if (!token || !email) {
      res.status(400).send('Invalid verification link');
      return;
    }

    const db = admin.firestore();
    const subscriberRef = db.collection('newsletterSubscribers').doc(email as string);
    const subscriberDoc = await subscriberRef.get();

    if (!subscriberDoc.exists) {
      res.status(400).send('Subscription not found');
      return;
    }

    const subscriberData = subscriberDoc.data();

    if (subscriberData?.verified) {
      res.send('Email already verified. Thank you!');
      return;
    }

    if (subscriberData?.verificationToken !== token) {
      res.status(400).send('Invalid verification token');
      return;
    }

    if (new Date() > subscriberData.verificationExpires.toDate()) {
      res.status(400).send('Verification link has expired');
      return;
    }

    // Mark as verified
    await subscriberRef.update({
      verified: true,
      verifiedAt: admin.firestore.FieldValue.serverTimestamp(),
      verificationToken: null,
    });

    res.send(`
      <html>
        <head>
          <title>Subscription Confirmed - Nozun Limited</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            .success { color: #10B981; font-size: 24px; }
          </style>
        </head>
        <body>
          <div class="success">✓</div>
          <h1>Subscription Confirmed!</h1>
          <p>Thank you for confirming your email address.</p>
          <p>You will now receive updates from Nozun Limited.</p>
          <a href="/">Return to website</a>
        </body>
      </html>
    `);

  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).send('Internal server error');
  }
});