module.exports = function(props) {
	var path = require("path"),
		config = require("./appConfig"),
		mongoose = require('mongoose'),
		Nutritive = require('./models/nutritive');

	var models = [
		"nutritive"
	];

	function dbConnection() {
		mongoose.connect(config.database);
		var db = mongoose.connection;

		db.on('error', console.error.bind(console, 'connection error:'));
		db.on('error', function(err) {
			console.log(err.stack);
			console.log(err);
		});

		return db;
	}

	function initializeMongoModels() {
		models.forEach(function(name, index){
			require(path.join(process.cwd(), config.modelsFolder, name));
		})
	}

	initializeMongoModels();
	return dbConnection();
}