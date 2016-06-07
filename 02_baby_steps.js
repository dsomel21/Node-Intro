var nums = process.argv;
var total = 0;
for (var i = 2; i < nums.length; i++){
	total += Number(nums[i]);
};
console.log(total);