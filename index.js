const AWS = require('aws-sdk')

const axios = require('axios')

// Using STS
const STS = new AWS.STS();
const params = {
  DurationSeconds: 3600,
  RoleArn: 'arn:aws:iam::721846126987:role/service-role/chat-widget-mqtt',
  RoleSessionName: 'CHAT_WIDGET'
};
STS.assumeRole(params, (err, data) => {
  if (err) {
    console.log(err); // an error occurred
  }
  else {
    console.log('DATA FROM STS ASSUME ROLE', data)
  }
})






// Using EC2 metadata
// const val = new AWS.EC2MetadataCredentials({
//   httpOptions: { timeout: 5000 }, // 5 second timeout
//   maxRetries: 10, // retry 10 times
//   retryDelayOptions: { base: 200 }, // see AWS.Config for information
// })
// console.log('DATA FROM EC2 METADATA', val)

// const data = new AWS.MetadataService({
//   httpOptions: { timeout: 5000 }, // 5 second timeout
//   maxRetries: 10, // retry 10 times
//   retryDelayOptions: { base: 200 }, // see AWS.Config for information
// })
// console.log('DATA FROM EC2 METADATA', data)

// axios
//   .get('http://169.254.169.254/latest/meta-data/iam/security-credentials/RnD-Terraform-Test')
//   .then((resp) => {
//     console.log('FETCH API', typeof resp.data)
//   })
//   .catch((err) => console.log('FETCH API', err))
