// const AWS = require('aws-sdk')

// const axios = require('axios')

// // Using STS
// const STS = new AWS.STS();
// const params = {
//   DurationSeconds: 3600,
//   RoleArn: 'arn:aws:iam::721846126987:role/service-role/chat-widget-mqtt',
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

const express = require('express')
const app = express()
const port = 6000

app.get('/api/', (req, res) => {
  res.send('Hello World!')
})

var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})
