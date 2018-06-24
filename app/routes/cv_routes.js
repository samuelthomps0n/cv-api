module.exports = function(app, db) {
	app.post('/experience', (req, res) => {
		
		const job = {
			title: req.body.title,
			location: req.body.location,
			company: req.body.company,
			description: req.body.description,
			start_date: req.body.start_date,
			end_date: req.body.end_date
		}

		db.collection('jobs').insert(job, (err, result) => {
			if(err) {
				res.send({ 'error': 'An error has ocurred' });
			} else {
				res.send(result.ops[0]);
			}
		})
	})

	app.get('/experience', (req, res) => {
		db.collection('jobs').find({}).sort( {_id: -1} ).toArray((err, results) => {
			if(err) {
				res.send(err);
			} else {
				res.send(JSON.stringify(results));
			}
		});
	})

	app.post('/skill', (req, res) => {
		const skill = {
			name: req.body.name
		}

		db.collection('skills').insert(skill, (err, result) => {
			if(err) {
				res.send({ 'error': 'An error has occured'});
			} else {
				res.send(result.ops[0]);
			}
		});
	})

	app.get('/skills', (req, res) => {
		db.collection('skills').find({}).toArray((err, results) => {
			if(err) {
				res.send(err);
			} else {
				res.send(JSON.stringify(results));
			}
		});
	})

	app.post('/contact', (req, res) => {
		const contact = {
			type: req.body.type,
			value: req.body.value
		};

		db.collection('contact').insert(contact, (err, result) => {
			if(err) {
				res.send(err);
			} else {
				res.send(result.ops[0]);
			}
		});
	})

	app.get('/contact', (req, res) => {
		db.collection('contact').find({}).toArray((err, results) => {
			if(err) {
				res.send(err);
			} else {
				res.send(JSON.stringify(results));
			}
		})
	})

};