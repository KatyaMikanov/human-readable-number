module.exports = function toReadable (number) {

    let numberToStr = number.toString();
    let result = '';
    
    if (numberToStr.length === 1) {
    result = numberToString (numberToStr);
    } else if (numberToStr.length === 2 && numberToStr[0] === '1' && numberToStr[1] !== '0') { 
    result = determinationOfTen(numberToStr[1]);
    } else if (numberToStr.length === 2 && numberToStr[1] === '0') { 
    result = roundTens (numberToStr[0]);  
    } else if (numberToStr.length === 2 && numberToStr[1] !== '0' && numberToStr[0] !== '1') {
    result = `${roundTens (numberToStr[numberToStr.length-2])} ${numberToString(numberToStr[numberToStr.length-1])}`;    
    } else if (numberToStr.length === 3 && numberToStr[2] === '0' && numberToStr[1] === '0') {
    result = `${numberToString (numberToStr[numberToStr.length-3])} hundred`;      
    } else if (numberToStr.length === 3 && numberToStr[1] === '0' && numberToStr[2] !== '0') {
    result = `${numberToString (numberToStr[numberToStr.length-3])} hundred ${numberToString (numberToStr[numberToStr.length-1])}`;  
    } else if (numberToStr.length === 3 && numberToStr[1] === '1' && numberToStr[2] !== '0') {
    result = `${numberToString (numberToStr[numberToStr.length-3])} hundred ${determinationOfTen (numberToStr[numberToStr.length-1])}`;        
    } else if (numberToStr.length === 3 && numberToStr[1] !== '0' && numberToStr[2] === '0') {
    result = `${numberToString (numberToStr[numberToStr.length-3])} hundred ${roundTens (numberToStr[numberToStr.length-2])}`; 
    } else if (numberToStr.length === 3 && numberToStr[1] !== '0' && numberToStr[1] !== '1' && numberToStr[2] !== '0') {
    result = `${numberToString (numberToStr[numberToStr.length-3])} hundred ${roundTens (numberToStr[numberToStr.length-2])} ${numberToString(numberToStr[numberToStr.length-1])}`;    
    }    
    
     function numberToString (numberDigit) {
    let digit = '';
    if (numberDigit === '1') {
    digit = 'one';
    } else if (numberDigit === '2') {
    digit = 'two';
    } else if (numberDigit === '3') {
    digit = 'three';
    } else if (numberDigit === '4') {
    digit = 'four';
    } else if (numberDigit === '5') {
    digit = 'five';
    } else if (numberDigit === '6') {
    digit = 'six';
    } else if (numberDigit === '7') {
    digit = 'seven';
    } else if (numberDigit === '8') {
    digit = 'eight';
    } else if (numberDigit === '9') {
    digit = 'nine';
    } else { digit = 'zero'}
    return digit;
    };
    
    function determinationOfTen (numberLast) {
    let ten = '';
    if (numberLast === '1') {
    ten = 'eleven';
    } else if (numberLast === '2') {
    ten = 'twelve';
    } else if (numberLast === '3') {
    ten = 'thirteen';
    } else if (numberLast === '4') {
    ten = 'fourteen';
    } else if (numberLast === '5') {
    ten = 'fifteen';
    } else if (numberLast === '6') {
    ten = 'sixteen';
    } else if (numberLast === '7') {
    ten = 'seventeen';
    } else if (numberLast === '8') {
    ten = 'eighteen';
    } else if (numberLast === '9') {
    ten = 'nineteen';
    };
    return ten;
    };
    
    function roundTens (numbers) {
    let tens = '';
    if (numbers === '1') {
    tens = 'ten';
    } else if (numbers === '2') {
    tens = 'twenty';
    } else if (numbers === '3') {
    tens = 'thirty';
    } else if (numbers === '4') {
    tens = 'forty';
    } else if (numbers === '5') {
    tens = 'fifty';
    } else if (numbers === '6') {
    tens = 'sixty';
    } else if (numbers === '7') {
    tens = 'seventy';
    } else if (numbers === '8') {
    tens = 'eighty';
    } else if (numbers === '9') {
    tens = 'ninety';
    }
    return tens;
    };
    
return result;
    
}
