/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */module.exports = function getLoveTrianglesCount(preferences = []) {
	const arr = preferences;
	let t = 0;
	for (let n = 0; n < (arr.length); n++) {
		let l1 = arr[n];
		let l2 = arr[l1 - 1];
		let l3 = arr[l2 - 1];
		if ( (l1 != l2) && (l2 != l3) && ((n+1) == l3) ) { 
			t+=1;
			arr[n]=' ';
		};
	};
	return t;
};