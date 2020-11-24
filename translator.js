var charMap = new Map([
	['a', 's'],
	['b', 'n'],
	['c', 'v'],
	['d', 'f'],
	['e', 'r'],
	['f', 'g'],
	['g', 'h'],
	['h', 'j'],
	['i', 'o'],
	['j', 'k'],
	['k', 'l'],
	['l', ';'],
	['m', ','],
	['n', 'm'],
	['o', 'p'],
	['p', '['],
	['q', 'w'],
	['r', 't'],
	['s', 'd'],
	['t', 'y'],
	['u', 'i'],
	['v', 'b'],
	['w', 'e'],
	['x', 'c'],
	['y', 'u'],
	['z', 'x'],
	['`', '1'],
	['1', '2'],
	['2', '3'],
	['3', '4'],
	['4', '5'],
	['5', '6'],
	['6', '7'],
	['7', '8'],
	['8', '9'],
	['9', '0'],
	['0', '-'],
	['-', '='],
	['[', ']'],
	[']', '\\'],
	[';', '\''],
	[',', '.'],
	['.', '/']
]);

var reverseCharMap = new Map();
function reverseMap(value, key, map) {
	reverseCharMap.set(value, key);
}

charMap.forEach(reverseMap);

// function to translate a string using the map
function trans(str, map) {
	newStr = "";
	for (let i = 0; i < str.length; i++) {
		curr = str.charAt(i);
		
		if (curr == ' ') newStr += ' ';
		else newStr += map.get(curr);
	}

	return newStr;
}

function transToScoot(str) {
	return trans(str, charMap);
}

function transFromScoot(str) {
	console.log(reverseCharMap)
	return trans(str, reverseCharMap);
}
