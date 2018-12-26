
var promise = new Promise( (resolve, reject) => {

	var val = Math.floor(Math.random() * 2000)

	console.log('val is ', val);

	if(val % 2 == 0)
	{
		console.log('1');
		resolve(new Promise( (res, reject) => {
			res(val + 1)
		})
		)
		console.log('2');
	}
	else
	{
		reject(val)
	}
});

promise.then( (promise2) => {
	console.log('promise2 ', promise2)
	promise2.then( (val) => { console.log(val) });
}
).catch( (val) => {
	console.log('it is odd ', val);
});

