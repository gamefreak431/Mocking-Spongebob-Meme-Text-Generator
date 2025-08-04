const generateButton = document.getElementById('generate');

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

