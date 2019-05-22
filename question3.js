const hex1 = '#FFFF00';
const hex2 = '#5b4288';
const rgb1 = 'rgb(9, 111, 90)';
const rgb2 = 'rgb(157, 68, 108)';

const hexToRGB = hex => {
    // separate 6 characters after # symbol into 3 strings
    let red = hex.slice(1, 3);
    let green = hex.slice(3, 5);
    let blue = hex.slice(5, 7);
    const alphabet = 'abcdefABCDEF'; // both lower and uppercase so that the function accepts both lower and uppercase hex values
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
        return Number(first * 16) + Number(second); // Number() to make sure first and second aren't strings
    }

    // make one color equal the rgb value of that color
    red = convertsOneColorToRGB(red);
    green = convertsOneColorToRGB(green);
    blue = convertsOneColorToRGB(blue);
    return `rgb(${red}, ${green}, ${blue})`;
}

console.log(`${hex1}: ${hexToRGB(hex1)}`);
console.log(`${hex2}: ${hexToRGB(hex2)}`);

rgbToHex = rgb => {
    let red = '';
    let green = '';
    let blue = '';
    let index = 0; // keep track of index after for loop is done

    for (let i = 4; rgb[i] !== ','; i++) { // get red
        red = red + rgb[i];
        index = i;
    }
    for (let i = index + 2; rgb[i] !== ','; i++) { // get green
        green = green + rgb[i];
        index = i;
    }
    for (let i = index + 2; rgb[i] !== ')'; i++) { // get blue
        blue = blue + rgb[i];
        index = i;
    }

    // convert color strings to number
    Number(red);
    Number(green);
    Number(blue);

    const convertsOneColorToHEX = color => {
        let first = 0;
        let second = 0;

        for (let i = 15; i >= 0; i--) { // get the first and second numbers
            if ((color - i) % 16 === 0) {
                first = (color - i) / 16;
                second = i;
            }
        }

        let letters = 'ABCDEF';
        const convertToLetter = x => { // convert numbers 10 or greater to letters
            if (x > 9) {
                for (let i = 15; i >= 10; i--) {
                    if (x === i) {
                        return letters[i - 10];
                    }
                }
            }
            else {
                return x;
            }
        }

        first = convertToLetter(first);
        second = convertToLetter(second);

        return first.toString() + second.toString(); // convert numbers to strings to prevent the sum of the two numbers being returned
    }

    red = convertsOneColorToHEX(red);
    green = convertsOneColorToHEX(green);
    blue = convertsOneColorToHEX(blue);

    return `#${red}${green}${blue}`;
}

console.log(`${rgb1}: ${rgbToHex(rgb1)}`);
console.log(`${rgb2}: ${rgbToHex(rgb2)}`);