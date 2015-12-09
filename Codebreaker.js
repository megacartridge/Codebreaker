var encodedLetters = ['p', 'b', 'q', 'r', 'a', 'r', 'j', 'o', 'v', 'r', 'f', ' ', 'n', 'e', 'r', ' ', 'g', 'u', 'r', ' ', 'z', 'b', 'f', 'g', ' ', 'f', 'h', 'c', 'c', 'b', 'e', 'g', 'v', 'i', 'r', ' ', 'p', 'b', 'z', 'z', 'h', 'a', 'v', 'g', 'l'];
var encodedMessage = encodedLetters.join("");
var decodedMessage = [];

//Notice both alphabets end with a space in the same position.
//var encodedAlphabet = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', ' '];
//var decodedAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

alert(encodedMessage);


var decoder = [['n', 'a'], ['o', 'b'], ['p', 'c'], ['q', 'd'], ['r', 'e'], ['s', 'f'], ['t', 'g'], ['u', 'h'], ['v', 'i'], ['w', 'j'], ['x', 'k'], ['y', 'l'], ['z', 'm'], ['a', 'n'], ['b', 'o'], ['c', 'p'], ['d', 'q'], ['e', 'r'], ['f', 's'], ['g', 't'], ['h', 'u'], ['i', 'v'], ['j', 'w'], ['k', 'x'], ['l', 'y'], ['m', 'z'], [' ', ' ']];

for (var i = 0; i < encodedLetters.length; i++) {
    if (i === (decoder[0][0])) {
        decodedMessage.push(decoder[0][1]);
    } else if (i === (decoder[1][0])) {
        decodedMessage.push(decoder[1][1]);
    } else {
        decodedMessage.push("Error");
    };
};

alert(decodedMessage);