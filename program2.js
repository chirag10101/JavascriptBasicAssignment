const convert = (arr,key) => {
	// Write your code here
    const result = {};
    for (const obj of arr) {
        result[obj[key]] = obj;
    }
    console.log(JSON.stringify(result));
    return result;
};
convert([{id: 1, value: 'abc'}, {id: 3, value: 'xyz'}], 'id');


/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;

