function createCharMap() {
	let charMap = new Map([
		['a', 's']
		['b', 'n']
		['c', 'v']
		['d', 'f']
		['e', 'r']
		['f', 'g']
		['g', 'h']
		['h', 'j']
		['i', 'o']
		['j', 'k']
		['k', 'l']
		['l', ';']
		['m', ',']
		['n', 'm']
		['o', 'p']
		['p', '[']
		['q', 'w']
		['r', 't']
		['s', 'd']
		['t', 'y']
		['u', 'i']
		['v', 'b']
		['w', 'e']
		['x', 'c']
		['y', 'u']
		['z', 'x']
		['`', '1']
		['1', '2']
		['2', '3']
		['3', '4']
		['4', '5']
		['5', '6']
		['6', '7']
		['7', '8']
		['8', '9']
		['9', '0']
		['0', '-']
		['-', '=']
		['[', ']']
		[']', '\']
		[';', ''']
		[',', '.']
		['.', '/']
	]);

	return charMap;
}

reverseCharMap = new Map();
function reverseMap(key, value, map) {
	reverseCharMap[value] = key;
}

const charMap = createCharMap();
charMap.forEach(reverseMap);


function transToScoot(str) {
	return trans(str, charMap);
}

function transFromScoot(str) {
	return trans(str, reverseCharMap);
}


// function to translate a string using the map
function trans(str, map) {
	newStr = "";
	for (let i = 0; i < str.length; i++) {
		char curr = str.charAt(i);
		newStr += map.get(curr);
	}

	return newStr;
}


module.exports.transToScoot = transToScoot;
module.exports.transFromScoot = transFromScoot;
