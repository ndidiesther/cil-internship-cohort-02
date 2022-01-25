
const https = require('https');
 
_EXTERNAL_URL = 'https://jsonplaceholder.typicode.com/users';


const callExternalApiUsingHttp = (callback) => {
    https.get(_EXTERNAL_URL, (resp) => {
    let data = '';
    
    
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    
    resp.on('end', () => {
        return callback(data);
       
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

module.exports.callApi = callExternalApiUsingHttp;