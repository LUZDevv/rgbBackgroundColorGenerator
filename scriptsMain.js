/* onButtonClick, run changeBgColor() and give us a new document body background color each time the button is pressed */

let bgChangeBtnHover = document.getElementById('bgColorChange');

/* random number - the maxNum parameter represents the 255 value indicating the max rgb index*/

const randomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
}
const setInitialTextColor = () => {
    document.getElementById('resultValue').innerHTML = 'rgb(127, 255, 212)';
  }

/* Create JS variables that can give out a random number for each of the r g b channgels used to create a combination of colors which in turn makes up a whole new color */
const getRandomBackgroundColor = () => {
    const r = randomNumber(255);
    const g = randomNumber(255);
    const b = randomNumber(255);

    return `rgb(${r}, ${g}, ${b} )`;
}

const getRandomBackgroundColorTwo = () => {
    const r = randomNumber(255);
    const g = randomNumber(255);
    const b = randomNumber(255);

    return `rgb(${r}, ${g}, ${b})`;
}

const setBackgroundColor = () => {
    const background = document.getElementById('background');
    const randomColor = getRandomBackgroundColor();
    background.style.transition = 'background-color 2s ease';
    background.style.backgroundColor = randomColor;

    const randomColorTwo = getRandomBackgroundColorTwo();
    buttonText.style.color = randomColorTwo;

    // This code below makes the color of the text in the button to match the background document color when user hovers the mouse over the button
    bgColorChange.addEventListener('mouseover', () => {
        buttonText.style.color = randomColor;
    });

    console.log(`${randomColor}`); 
    document.getElementById('resultValue').innerHTML = randomColor;
  };










