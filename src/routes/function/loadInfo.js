const axios = require('axios').default;


axios({
	method: 'get',
	url: 'http://ec2-100-26-152-194.compute-1.amazonaws.com:3000/battles/1',
	headers: {
		'content-type': 'application/json',
		'Token': '25a77d55-495a-4300-b72b-a61d90146786'
	}
})
.then(function (response) {
	array = response.data;
	});
	
exports.algo = () => {
	return array;
}