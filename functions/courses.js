const axios = require('axios')
var Airtable = require('airtable')
require('dotenv').config()

exports.handler = function (event, context, callback) {
  let category = event.queryStringParameters.category

  //1 for ap, 2 for college level, 3 for test prep, 4 for misc.
  //default 1
  let c = 'AP Courses'
  if (category == 2) {
    c = 'CL Courses'
  } else if (category == 3) {
    c = 'TP Courses'
  } else if (category == 4) {
    c = 'Misc. Courses'
  }

  var base = new Airtable({ apiKey: process.env.KEY }).base(
    'apprEDMBB2pnH11HZ'
  )
  let courses = []
  base(c)
    .select({
      maxRecords: 100,
      view: 'Grid view',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          courses.push({
            Name: record.get('Name'),
            Credits: record.get('Credits'),
            Prerequisites: record.get('Prerequisite(s)'),
            Corequisites: record.get('Corequisite(s)'),
            Syllabus: record.get('Syllabus'),
            Notes: record.get('Notes'),
            Instructors: record.get('Instructors'),
            ApproximateCompletionTime: record.get(
              'Approximate Completion Time'
            ),
          })
        })
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(courses),
        })
      },
      function done(err) {
        callback(err)
      }
    )
}
