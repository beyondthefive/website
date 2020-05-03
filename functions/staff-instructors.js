const Airtable = require('airtable')
require('dotenv').config()

exports.handler = function (event, context, callback) {
	const base = new Airtable({apiKey: process.env.KEY}).base(
		'apprEDMBB2pnH11HZ'
	)
	const data = []
	base('Instructors')
		.select({
			view: 'Grid view'
		})
		.eachPage(
			function page(records, fetchNextPage) {
				records.forEach(record => {
					data.push({
						Name: record.get('Name'),
						Position: record.get('Position'),
						Email: record.get('Email'),
						Location: record.get('Location'),
						About: record.get('About')
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
					body: JSON.stringify(data)
				})
			}
		)
}
