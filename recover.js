const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/kenta/.gemini/antigravity-ide/brain/34911c4d-018b-4c77-be22-9859e5e860ac/.system_generated/logs/transcript_full.jsonl', 'utf8');

const searchStr = '<!DOCTYPE html>\\n<html lang=\\"es\\" class=\\"scroll-smooth\\">';
const index = transcript.indexOf(searchStr);

if (index > -1) {
    console.log('FOUND IT AT INDEX', index);
    const endIndex = transcript.indexOf('</html>', index) + 7;
    let htmlCode = transcript.substring(index, endIndex);
    
    // Parse the escaped JSON string back to normal HTML
    // We only need to unescape newlines and quotes if we are parsing from a JSON string.
    try {
        htmlCode = JSON.parse('"' + htmlCode + '"');
    } catch (e) {
        console.log('Failed to JSON parse, doing manual replace');
        htmlCode = htmlCode.replace(/\\n/g, '\n').replace(/\\"/g, '"');
    }
    
    fs.writeFileSync('C:/Users/kenta/Desktop/portafolio/recovered.html', htmlCode, 'utf8');
    console.log('Recovered to recovered.html');
} else {
    console.log('NOT FOUND WITH THAT EXACT STRING');
    // Try regex
    const match = transcript.match(/<!DOCTYPE html>.*?<html lang=\\"es\\" class=\\"scroll-smooth\\">.*?<\/html>/s);
    if (match) {
         console.log('FOUND VIA REGEX!');
    }
}
