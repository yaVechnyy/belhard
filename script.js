obj1 = {
		firstName: "Витя",
		lastName: "Киселёв",
		age: 45,
		children: null,
		dates: {
			birthday: '26.01.1977',
			wedding: '05.09.2000',
			graduationFromUniversity: '07.06.2003'
		}
	}
alert(JSON.stringify(obj1, function replacer(key, value){
	console.log(`${key}: ${value}`);
	return value;
}, 2));