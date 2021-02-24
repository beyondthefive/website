const Airtable = require('airtable')
require('dotenv').config()

exports.handler = function (event, context, callback) {
	const base = new Airtable({apiKey: process.env.KEY}).base('app728KlxhgGI5z8c')
	const data = []
	base('FAQs')
		.select({
			view: 'Grid view'
		})
		.eachPage(
			function page(records, fetchNextPage) {
				for (const record of records) {
					data.push({
						Question: record.get('Question'),
						Answer: record.get('Answer')
					})
				}

				fetchNextPage()
			},
			function done(error) {
				if (error) {
					callback(error)
				}

				callback(null, {
					statusCode: 200,
					body: JSON.stringify(data)
				})
			}
		)
}
