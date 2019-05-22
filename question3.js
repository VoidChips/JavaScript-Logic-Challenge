const hex1 = '#FFFF00';
const hex2 = '#5b4288';

const hexToRGB = hex => {
    // separate 6 characters after # symbol into 3 strings
    let red = hex.slice(1, 3);
    let green = hex.slice(3, 5);
    let blue = hex.slice(5, 7);
    const alphabet= 'abcdefABCDEF'; // both lower and uppercase so that the function accepts both lower and uppercase hex values
    const letterToNum = val => { 
        let index = alphabet.search(val);
        if (index === -1) { // if val is not part of alphabet string, return val
            return val;
        }
        else if (index < 6) { // if the alphabet string contains val, return value greater than 10
            return 10 + index;
        }
        else {
            index -= 6;
            return 10 + index;
        }
    }
    const convertsOneColorToRGB = color => { // returns rgb value of one color
        const first = letterToNum(color[0]); // first is the value of the string's first element
        const second = letterToNum(color[1]); // second element
        return Number(first*16) + Number(second); // Number() to make sure first and second aren't strings
    }

    // make one color equal the rgb value of that color
    red = convertsOneColorToRGB(red);
    green = convertsOneColorToRGB(green);
    blue = convertsOneColorToRGB(blue);
    return `rgb(${red}, ${green}, ${blue})`;
}

console.log(hexToRGB(hex1));
console.log(hexToRGB(hex2));