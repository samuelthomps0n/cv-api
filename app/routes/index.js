const cvRoutes = require('./cv_routes');

module.exports = function(app, db) {
	cvRoutes(app, db);
};