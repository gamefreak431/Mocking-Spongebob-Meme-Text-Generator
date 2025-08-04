const generateButton = document.getElementById('generate');
const clearButton = document.getElementById('clear');

generateButton.addEventListener('click', () => {
    const input = document.getElementById('input').value.split('');
    let output = '';
    let capitalized = false;
    input.forEach((char) => {
        if  (capitalized) {
            output += char.toUpperCase();
            capitalized = false;
        }
        else {
            output += char.toLowerCase();
            capitalized = true;
        }
    })
    document.getElementById('output').value = output;
})

clearButton.addEventListener('click', () => {
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
});