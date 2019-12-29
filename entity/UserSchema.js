var dbConfig = require('../databaseConfig/databaseConnection.js');
var sequelize = dbConfig.sequelize;
var Sequelize = dbConfig.Sequelize;


var userSchema = sequelize.define('user',
// attributes
{
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	username: {
		type: Sequelize.TEXT,
		allowNull: false	
	},
	password: {
		type: Sequelize.TEXT,
		allowNull: false	
	},
	user_type: {
		type: Sequelize.TEXT,
		allowNull: false
	}		
}, {
	//Options
	paranoid: true,
	freezeTableName: false,
	tableName: 'users'
});

userSchema.sync({ /* stop forcing updating table */ force: true})
.then(function(result){
	console.log("inside userschema sync:: " + result);
})
.catch(function(err) {
	console.log(err);
});

module.exports = {userSchema};
