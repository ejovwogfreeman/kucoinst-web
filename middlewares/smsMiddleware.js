// const twilio = require("twilio");
// const Sms = require("../models/smsModel");
// const User = require("../models/userModel");
// const fs = require("fs");

// const { promisify } = require("util");

// const readFile = promisify(fs.readFile);

// const accountSid = AC92d456b7739043f65ac52ddbd37d8dfb;
// const authToken = bd50d249600dfe005cd0d8c6add6ee27;
// const client = new twilio(accountSid, authToken);

// let info = {
//   from: "YOUR_TWILIO_PHONE_NUMBER",
//   to: user.phoneNum,
//   body: await readFile(`middlewares/${body}`, "utf8"),
// };
// let user = await User.findOne({ phoneNum: reciever });

// const saveSms = {
//   sms: info,
//   user: {
//     id: user.id,
//     email: user.email,
//     username: user.username,
//   },
// };

// const newSms = new Sms(saveSms);
// await newSms.save();

// client.messages
//   .create(info)
//   .then((message) => console.log(`Message SID: ${message.sid}`))
//   .catch((error) => console.error(error));

// module.exports = sms;

const twilio = require("twilio");
const Sms = require("../models/smsModel");
const User = require("../models/userModel");
const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

// Twilio credentials
const accountSid = "AC92d456b7739043f65ac52ddbd37d8dfb";
const authToken = "bd50d249600dfe005cd0d8c6add6ee27";
const client = new twilio(accountSid, authToken);

const sms = async (reciever, body) => {
  try {
    // Find the user
    let user = await User.findOne({ phoneNum: reciever });

    if (!user) {
      console.log("User not found.");
      return;
    }

    // Read the SMS body from file
    const smsBody = await readFile(`middlewares/${body}`, "utf8");

    // Prepare SMS information
    const smsInfo = {
      from: "YOUR_TWILIO_PHONE_NUMBER", // Replace with your Twilio phone number
      to: user.phoneNum,
      body: smsBody,
    };

    // Save SMS to database
    const saveSms = {
      sms: smsInfo,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    };

    const newSms = new Sms(saveSms);
    await newSms.save();

    // Send SMS using Twilio
    client.messages
      .create(smsInfo)
      .then((message) => console.log(`Message SID: ${message.sid}`))
      .catch((error) => console.error(error));

    console.log("SMS sent and saved successfully.");
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = sms;
