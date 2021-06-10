const crypto = require('crypto');
const pbkdf2 = require('pbkdf2');

const password = 'myPassword';
const salt = crypto.randomBytes(20).toString('hex');

const key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256');
const hash = key.toString('hex');

const stored_pass = `pbkdf2_sha256*3600*${salt}*${hash}`;

const newPassword = "myPasswor";
const pass_parts = stored_pass.split('*');

const keyNewLogin = pbkdf2.pbkdf2Sync(
  newPassword,
  pass_parts[2],
  parseInt(pass_parts[1]),
  256,
  'sha256'
);

const hashNewLogin = keyNewLogin.toString('hex')

if(hashNewLogin === pass_parts[3]){
  console.log("It's a match.");
} else {
  console.log("Incorrect pw.");
}