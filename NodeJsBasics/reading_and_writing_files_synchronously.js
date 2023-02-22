const readline = require('readline')
const fs = require('fs');

/**
    This function reads the input.txt synchronously and this variable stores all the strings in the .txt file.
**/ 
let textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);
let content = `Data read from input.txt: ${textIn} \nDate created ${new Date()}`;
fs.writeFileSync('./txt/output.txt', content);