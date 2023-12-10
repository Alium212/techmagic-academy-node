const fs = require('fs');
const findMostRepeatedLetter = require('@alium212/techmagic-academy-node-npm-packet-task');

const readFileAndFindMostCommonLetter = (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const { letter, count } = findMostRepeatedLetter(data);
        console.log(`Most common letter in the text: ${letter}, count: ${count}.`);
    });
};

const filePath = process.argv[2];

if (!filePath) {
    console.error('Please provide the path to the text file as a command line argument.');
} else {
    readFileAndFindMostCommonLetter(filePath);
}
