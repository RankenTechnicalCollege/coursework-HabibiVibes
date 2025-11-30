import fs from 'node:fs';

const buffer = Buffer.from('Hello, Buffer!');
console.log(buffer);

fs.writeFile('binaryData.data', buffer, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Binary data written to binaryData.bin');

    fs.readFile('binaryData.data', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Read binary data:', data.toString('utf8'));
    });
});