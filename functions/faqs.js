const Airtable = require('airtable');
require('dotenv').config();

exports.handler = function (event, context, callback) {
	const base = new Airtable({apiKey: process.env.KEY}).base(
		'app728KlxhgGI5z8c'
	);
	const data = [];
	base('FAQs')
		.select({
			view: 'Grid view'
		})
		.eachPage(
			function page(records, fetchNextPage) {
				records.forEach(record => {
					data.push({
						Question: record.get('Question'),
						Answer: record.get('Answer')

					});
				});

				fetchNextPage();
			},
			function done(err) {
				if (err) {
					callback(err);
				}

				callback(null, {
					statusCode: 200,
					body: JSON.stringify(data)
				});
			}
		);
};
