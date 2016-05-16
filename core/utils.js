var request = require("request");
// Usage: console.log("MOISTURE(GM)".toCamelCase());
String.prototype.toCamelCase = function() {
    return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
}
var cusineCodes = [undefined, "AP", "Arunachal pradesh", "Assam", "Bihar", "Chhattishgarh", "Goa", "Gujarat", "Haryana", "HP", "J&K", "Jharkhand", "Karnataka", "Kerala", "MP", "Maharastra", "Manipur", "Maghalaya", "Mizoram", "Nagaland", "Orissa", "Punjab", "Rajasthan", "Sikkim", "TN", "TS", "Tripura", "UP", "Uttarakhand", "WB"];
var reviewerMappings = {
    "naazia.kauser": {
        reviewee: "sarojanandam.mattagunja"
    },
    "sarojanandama.mattagunja": {
        reviewee: "merlin.annieraj"
    },
    "merlin.annieraj": {
        reviewee: "naazia.kauser"
    },
    "rajasekhar.vanapalli": {
        reviewee: "solomon.ch"
    },
    "solomon.ch": {
        reviewee: "kalpana.payagulla"
    },
    "kalpana.payagulla": {
        reviewee: "krishna.swathi"
    },
    "krishna.swathi": {
        reviewee: "priyanka.gupta"
    },
    "priyanka.gupta": {
        reviewee: "rajasekhar.vanapalli"
    }
};

function sendAnSms(text, phoneNumber) {
    // var TMClient = require('textmagic-rest-client');
    // var c = new TMClient('username', 'C7XDKZOQZo6HvhJwtUw0MBcslfqwtp4');
    // c.Messages.send({
    //     text: text,
    //     phones: phoneNumber
    // }, function(err, res) {
    //     console.log('Messages.send()', err, res);
    // });
    request("http://5.189.163.240//httpapi/sendmsg.php?user=callhealth5&password=LYIMJtyS&from=calltr&to=919985572137&message=hello_hellohello_hello_750&msg_type=t&dcs=0&deliv_ack=1&udh=0",function(error, response, body){
    	if(error)return console.log(error);
    	return true;
    });
}
module.exports.sendAnSms = sendAnSms;
module.exports.cusineCodes = cusineCodes;
module.exports.reviewerMappings = reviewerMappings;

