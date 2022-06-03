const AWS = require('aws-sdk')

// Using STS
// const STS = new AWS.STS();
// const params = {
//   DurationSeconds: 3600,
//   RoleArn: 'arn:aws:iam::721846126987:role/RnD-Terraform-Test',
//   RoleSessionName: 'CHAT_WIDGET'
// };
// STS.assumeRole(params, (err, data) => {
//   if (err) {
//     console.log(err); // an error occurred
//   }
//   else {
//     console.log('DATA FROM STS ASSUME ROLE', data)
//   }
// })

// Using EC2 metadata
const val = new AWS.EC2MetadataCredentials({
  httpOptions: { timeout: 5000 }, // 5 second timeout
  maxRetries: 10, // retry 10 times
  retryDelayOptions: { base: 200 }, // see AWS.Config for information
})
console.log('DATA FROM EC2 METADATA', val)

const data = new AWS.MetadataService({
  httpOptions: { timeout: 5000 }, // 5 second timeout
  maxRetries: 10, // retry 10 times
  retryDelayOptions: { base: 200 }, // see AWS.Config for information
})
console.log('DATA FROM EC2 METADATA', data)
