import request from 'request'

const accountSid = 'AC66b231221b38ec6ddcaf1a29cdf4face';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

/** function to send SMS
 * @param {string} to
 * @param {string} message
 * @returns {Object}
 */
const sendSMS = async(to, message) {
    let response;
    try {
        response = await client.messages
        .create({
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: '+15017122661',
            to: '+15558675310'
        })    
    } catch (error) {
        return {error:'Error sending SMS'}
    } 
    
    return response;
}