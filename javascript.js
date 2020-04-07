var frend1 = {
	name: 'đại',
	weight: 100,
	age:23,
	inMale:false
  };
var frend2 = {
	name: 'đức',
	weight: 90,
	age:23,
	inMale:false
  };
  var frend3 = {
	name: 'hải',
	weight: 1000,
	age:23,
	inMale:true
  };
var classFrends = [frend1, frend2, frend3];
var frend4 = {
	name: 'thùy',
	weight: 500,
	age:23,
	isLive: true
};
classFrends[3] = frend4;
console.log(classFrends);