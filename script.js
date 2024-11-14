// Задание 1
document.getElementById('changeImageButton').addEventListener('click', () => {
    const url = document.getElementById('imageUrlInput').value;
    document.getElementById('image').src = url;
});

// Задание 2
const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('mouseenter', () => {
    hoverButton.textContent = 'Маааагия!';
});
hoverButton.addEventListener('mouseleave', () => {
    hoverButton.textContent = 'Наведи на меня!';
});

// Задание 3
document.getElementById('changeColorButton').addEventListener('click', () => {
    const textColor = document.getElementById('textColorInput').value;
    const bgColor = document.getElementById('bgColorInput').value;
    const paragraph = document.getElementById('coloredParagraph');
    paragraph.style.color = textColor;
    paragraph.style.backgroundColor = bgColor;
});

// Задание 4
document.getElementById('changeBorderButton').addEventListener('click', () => {
    const borderWidth = document.getElementById('borderWidthInput').value;
    const borderColor = document.getElementById('borderColorInput').value;
    const table = document.querySelector('table');
    table.style.border = `${borderWidth} solid ${borderColor}`;
});

// Задание 5: Сумма чисел
document.getElementById('calculateButton').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const sum = num1 + num2;
    document.getElementById('result').textContent = sum;
});
