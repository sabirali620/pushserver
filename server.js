const webPush = require('web-push');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const webPush = require('web-push');

const vapidKeys = webPush.generateVAPIDKeys();

console.log('Public Key:', vapidKeys.publicKey);
console.log('Private Key:', vapidKeys.privateKey);

const publicVapidKey = vapidKeys.publicKey;
const privateVapidKey = vapidKeys.privateKey;

webPush.setVapidDetails('mailto:your-email@example.com', publicVapidKey, privateVapidKey);

let subscriptions = [];

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  subscriptions.push(subscription);
  res.status(201).json({});
});

app.post('/send-notification', (req, res) => {
  const payload = JSON.stringify({
    title: 'Hello!',
    body: 'This is a push notification.',
    icon: '/icon.png',
    url: 'https://example.com',
  });

  subscriptions.forEach((subscription) => {
    webPush.sendNotification(subscription, payload).catch(console.error);
  });

  res.status(200).json({});
});

app.listen(3000, () => console.log('Server started on port 3000'));
