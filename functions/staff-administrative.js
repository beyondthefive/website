const Airtable = require('airtable');
require('dotenv').config();

exports.handler = function (event, context, callback) {
	base = new Airtable({apiKey: process.env.KEY}).base('appT5Qlz3I0sE6p8U');
	const data = [];
	base('Staff')
		.select({
			view: 'Grid view'
		})
		.eachPage(
			function page(records, fetchNextPage) {
				records.forEach(record => {
					data.push({
						Name: record.get('Name'),
						Email: record.get('Email'),
						Location: record.get('Location'),
						About: record.get('About')
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
