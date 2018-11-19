// Write your cade below:
function caclRemaindar(x,y) {
	return x%y;
};


function caclSum(array) {
	sum = 0;
	for (i = 0; i < array.length; i++){
		sum+=array[i];
	}
	return sum;
};
	

function caclSumInConditon(array,threshold) {	
	sum = 0;
	for (i = 0; i < array.length; i++){
		if (array[i] < threshold){
			sum+=array[i];
		}
	}
	return sum;
};
module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}