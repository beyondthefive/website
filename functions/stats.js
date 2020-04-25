const moment = require('moment')
const axios = require('axios')

exports.handler = function (event, context, callback) {
	axios
		.get('https://beyondthefive.com/.netlify/functions/courses')
		.then(response => {
			const categories = {
				AdvancedPlacement: 0,
				CollegeLevel: 0,
				CollegeTestPreparation: 0,
				Miscellaneous: 0
			}
			const subjects = {
				English: 0,
				Biology: 0,
				Chemistry: 0,
				Math: 0,
				History: 0,
				SocialSciences: 0,
				ComputerScience: 0,
				Misc: 0,
				CollegeTestPrep: 0,
				Languages: 0,
				Physics: 0
			}
			let out = {totalCourses: response.data.length}
			response.data.map(c => {
				if (c.Category == 'Advanced Placement') {
					categories.AdvancedPlacement++
				} else if (c.Category == 'College-Level') {
					categories.CollegeLevel++
				} else if (c.Category == 'College & Test Preparation') {
					categories.CollegeTestPreparation++
				} else if (c.Category == 'Miscellaneous') {
					categories.Miscellaneous++
				}

				if (c.Subject.includes('English')) {
					subjects.English++
				}

				if (c.Subject.includes('Biology')) {
					subjects.Biology++
				}

				if (c.Subject.includes('Chemistry')) {
					subjects.Chemistry++
				}

				if (c.Subject.includes('Math')) {
					subjects.Math++
				}

				if (c.Subject.includes('History')) {
					subjects.History++
				}

				if (c.Subject.includes('Social Sciences')) {
					subjects.SocialSciences++
				}

				if (c.Subject.includes('Computer Science')) {
					subjects.ComputerScience++
				}

				if (c.Subject.includes('Misc.')) {
					subjects.Misc++
				}

				if (c.Subject.includes('College & Test Prep.')) {
					subjects.CollegeTestPrep++
				}

				if (c.Subject.includes('Languages')) {
					subjects.Languages++
				}

				if (c.Subject.includes('Physics')) {
					subjects.Physics++
				}
			})
			out = {...out, subjects, categories}
			callback(null, {
				statusCode: 200,
				body: JSON.stringify(out)
			})
		})
		.catch(error => {
			callback(null, {
				statusCode: 200,
				body: error
			})
		})
}
