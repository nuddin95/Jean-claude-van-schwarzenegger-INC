const Sequelize = require('sequelize')
const db = require('../db')

const Reviews = db.define('reviews', {
	starRating:{
		type:Sequelize.INTEGER,
		allowNull:false
	},
	content:{
		type:Sequelize.TEXT,
		allowNull:true,
		validate:{
			len:[0, 20]
		}
	}
})

module.exports = Reviews;

Reviews.prototype.getDate= function(){
	return String(this.dataValues.createdAt);
}