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

function decode(mass) {
    // write your solution here
    let newArray = [];
    let morseStr = '';
    let result = '';
    for (let i = 0; i < mass.length; i += 10) {
        newArray.push(mass.slice(i, i + 10));
    }
    for (let value of newArray) {
        //console.log(value);
        morseStr = '';
        for (let i = 0; i < value.length; i += 2) {
            if(value.slice(i, i + 2) == 10){
                morseStr += '.';
            }
            if(value.slice(i, i + 2) == 11){
                morseStr += '-';
            }
            if(value.slice(i, i + 2) == '**'){
                morseStr += '%';
            }
        }
        if (morseStr == '%%%%%'){
            result += ' ';
        }
        else {
            result += MORSE_TABLE[morseStr];
        }
    }
    return result;

}

module.exports = {
    decode
}