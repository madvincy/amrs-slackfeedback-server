const WebClient = require('@slack/client').WebClient;
const slackconfig = require('../config/slackconfig.json');
function postFeedbackToPoc(message) {
    let token = slackconfig.slack.bottoken;
    let channel = "CSE7N5VB9";
    return new Promise(function (resolve, reject) {
        let web = new WebClient(token);
        web.chat.postMessage(channel, message, function(err, res) {
            if (err) {
                console.log('Error:', err);
                resolve({ status: err });
            } else {
                console.log('Message sent:' + '' + message);
                resolve({ status: 'okay' });
            }
        });
    });
}
    var postfeedback = {
        postFeedbackToPoc: postFeedbackToPoc,
    };
    module.exports.postfeedback = postfeedback;