module.exports = function toReadable (number) {
    if (number == 0 ) return 'zero';
    let hundr = Math.trunc(number / 100)
    let ten = number -hundr*100;
    let one = number -hundr*100  - Math.trunc(ten / 10) * 10;
    let result = "";
    let bookSimple = {
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine'
    };
    let bookSpec = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen', 
        17: 'seventeen',
        18: 'eighteen',
        19:  'nineteen'
    }
    let bookTen = {
        2:'twenty',
        3:'thirty',
        4:'forty',
        5:'fifty',
        6:'sixty',
        7:'seventy',
        8:'eighty',
        9:'ninety'
    }
    if (hundr){
        result += `${bookSimple[hundr]} hundred`;
    }
    if(ten in bookSpec){
        result += ` ${bookSpec[ten]}`;
    } else{
        ten = Math.trunc(ten / 10)
        if(ten) result += ` ${bookTen[ten]}`
        if (one) result += ` ${bookSimple[one]}`
    }
    return result.trim();
}
