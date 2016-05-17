var request = require("request"),
    chance = require("chance")();
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
    request("http://5.189.163.240/httpapi/sendmsg.php?user=callhealth5&password=LYIMJtyS&from=calltr&to=919985572137&message=hello_hellohello_hello_750&msg_type=t&dcs=0&deliv_ack=1&udh=0",function(error, response, body){
    	if(error)return console.log(error);
    	return true;
    });
}
function scheduleNotification(key, datetime, message){
    var date = new Date(
        datetime.getFullYear(),
        datetime.getMonth(),
        // We will reapeat this daily, so commenting below for now
        // datetime.getDate(),
        datetime.getHours(),
        datetime.getMinutes(), 
        0);
    
    var j = schedule.scheduleJob(date, function(){
        var notificationBody = {
                "to": key,
                "data": {
                    "message": message,
                }
            },
            url = "https://gcm-http.googleapis.com/gcm/send",
            headers = {
                "Authorization": "key=AIzaSyCrZC2cacQTXJppsCtSAH-_Uu4lf0YOPu4",
                "Content-Type": "application/json"
            },
            proxy = request.post({
                uri: url,
                json: notificationBody,
                headers: headers,
            }, function(error, response, body) {
                if (error) console.log(error);
                else console.log("Successfully sent a notification to client: ", key);
            });
    });

}
function scheduleMedicationPlan(key, medicationPlan){
    var medicines = medicationPlan.medicines;
    medicines.forEach(function(index,medicine){
        var schedules = medicine.schedules;
        schedules.forEach(function(schedule){
            scheduleNotification(key,schedule.datetime,"Time for your Medicine. Tap on to see");
        })
    });
}

module.exports.sendAnSms = sendAnSms;
module.exports.cusineCodes = cusineCodes;
module.exports.reviewerMappings = reviewerMappings;

//  This method will parse a Medication prescription given by Diabetic Doctors
//  and schedules all required reminders. Actual medication is not altered 
//  Schedule compliance must be taken care though to be recorded alongside with actual data
module.exports.scheduleMedicationPlan = scheduleMedicationPlan;
