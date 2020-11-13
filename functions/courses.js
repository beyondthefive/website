const Airtable = require('airtable')
require('dotenv').config()

exports.handler = function (event, context, callback) {
	const base = new Airtable({apiKey: process.env.KEY}).base('apprEDMBB2pnH11HZ')
	const courses = []
	base('Course Catalog')
		.select({
			view: 'Published View'
		})
		.eachPage(
			function page(records, fetchNextPage) {
				records.forEach((record) => {
					courses.push({
						FormattedName: record.get('Formatted Name'),
						Name: record.get('Name'),
						Code: record.get('Course Code'),
						Credits: record.get('Credits'),
						Prerequisites: record.get('Prerequisite(s)'),
						Corequisites: record.get('Corequisite(s)'),
						Syllabus: record.get('Syllabus'),
						Notes: record.get('Notes'),
						Description: record.get('Description'),
						Instructors: record.get('Instructors'),
						Time: record.get('Estimated Completion Time'),
						Subject: record.get('Raw Subject').split(', '),
						Category: record.get('Raw Category')
					})
				})
				fetchNextPage()
			},
			function done(err) {
				if (err) {
					callback(err)
				}

				callback(null, {
					statusCode: 200,
					body: JSON.stringify(courses)
				})
			}
		)
}
