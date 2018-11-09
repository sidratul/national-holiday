var {getHolidays} = require('public-holidays');
const options = { 
	country: 'id',
	lang: 'id' ,
	start : new Date("2018-11-01"),
	end : new Date("2018-12-01"),
};

getHolidays(options).then(function(val){
	console.log(val);
})
