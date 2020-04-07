var dog1 = {
	name: 'đại',
	weight: 100,
	age:23,
	inMale:false
  };
var dog2 = {
	name: 'đức',
	weight: 90,
	age:23,
	inMale:false
  };
  var dog3 = {
	name: 'hải',
	weight: 1000,
	age:23,
	inMale:true
  };
var bunchOfDogs = [dog1, dog2, dog3];
var dog4 = {
	name: 'thùy',
	weight: 500,
	age:23,
	isLive: true
};
bunchOfDogs[3] = dog4;
console.log(bunchOfDogs);