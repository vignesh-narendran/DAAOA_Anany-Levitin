var nums = window.prompt(
	'Enter two numbers for which GCD has to be calculated',
	'10,5'
);
if (nums != null) {
	var numsArr = nums.split(',').map((num) => {
		return Number(num);
	});
	numsArr.includes(NaN)
		? alert('Please enter only numbers!')
		: gcd(Math.max(...numsArr), Math.min(...numsArr));
}

function gcd(m, n) {
	n != 0 ? gcd(n, m % n) : alert(`GCD is ${m}`);
}
