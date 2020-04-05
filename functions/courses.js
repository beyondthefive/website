const axios = require('axios')
require('dotenv').config()

exports.handler = function(event, context, callback) {
  let category = event.queryStringParameters.category
  //1 for ap, 2 for college level, 3 for test prep and misc.
  //default 1
  let courses = 'AP'
  if (category == 2) {
    courses = 'College-Level'
  } else if (category == 3) {
    courses = 'TestPrep&misc'
  }

  axios
    .get(
      'https://api.sheetson.com/v1/sheets/' +
        courses +
        '?spreadsheetId=' +
        process.env.SHEET_ID +
        '&limit=100'
    )
    .then(json => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(json.data)
      })
    })
    .catch(ex => callback(ex))
}
