import https from 'https';


/** function to send SMS
 * @param {string} to
 * @param {string} message
 * @returns {Object}
 */
const sendSMS = async(to, message) {
    let settings = {
        "async": true,
        "crossDomain": true,
        "hostname": "connect.routee.net",
        "port": 443,
        "path": "/sms",
        "method": "POST",
        "headers": {
          "Authorization": "Bearer 12dc9fe4-7df4-4786-8d7a-a46d307687f4",
          "Content-Type": "application/json"
        },
        "processData": false,
        "data": JSON.stringify({body:message,to:to,from:process.env.SMS_NAME})
    }

    let response;

    try{
        response = await https.request(settings);
    }catch(e){
        return 'FAILED';
    }
    return 'SUCCESS';
   
}

export default sendSMS;