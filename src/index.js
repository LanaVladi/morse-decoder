const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    // const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
let arr = [];
for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
    // console.log(expr); 
    // console.log(arr);
}
const twoZero = '';
const dotTen = '.';
const dashEleven = '-';
const space = ' ';

arr = arr.map((elem) => elem.replace(/00/g, twoZero)
.replace(/10/g, dotTen)
.replace(/11/g, dashEleven)
.replace(/\*\*\*\*\*\*\*\*\*\*/g, space));
//   console.log(space);
//   console.log(arr);

arr = arr.map((elem) => elem !== ' ' ? MORSE_TABLE[elem] : ' ');
let str = arr.join('')
return str;
// console.log(str);
}
module.exports = {
    decode
}