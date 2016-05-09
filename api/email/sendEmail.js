import { User } from '../models/user';

const sendgrid = require('sendgrid')(process.env.ENCORE_SG);
const template = require('lodash/template');
const templateEmail = require('./email').default;

console.log(process.env.ENCORE_SG);

export function sender({ fromAddress, toAddress, view }) {
  const compiled = template(templateEmail);
  const result = compiled(view);

  const email = new sendgrid.Email({
    from: fromAddress,
    to: toAddress,
    subject: 'Your photos from Encore #youarerock',
    html: result,
  });

  console.log(email);

  sendgrid.send(email, function(err, json) {
    if (err) { return console.error(err, toAddress); }
    console.log(json, toAddress);
  });
}

export function findEmails() {
  return User.find({ email: { $ne: null } })
  .then((users) => {
    console.log(users)
    users.forEach((user) => {
      console.log(user.editedPhoto)
      // sender({
      //   fromAddress: 'us@encore-rit.com',
      //   toAddress: user.email,
      //   view: {
      //     username: user.username,
      //     message: user.memory,
      //     editedPhoto: user.editedPhoto,
      //     photo1: user.photos[0],
      //     photo2: user.photos[1],
      //     photo3: user.photos[2],
      //   },
      // });
    });
  });
}
