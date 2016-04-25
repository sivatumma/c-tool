// Usage: console.log("MOISTURE(GM)".toCamelCase());
String.prototype.toCamelCase = function() {
	return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
		if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
		return index == 0 ? match.toLowerCase() : match.toUpperCase();
	});
}

var cusineCodes = [undefined,
	"AP",
	"Arunachal pradesh",
	"Assam",
	"Bihar",
	"Chhattishgarh",
	"Goa",
	"Gujarat",
	"Haryana",
	"HP",
	"J&K",
	"Jharkhand",
	"Karnataka",
	"Kerala",
	"MP",
	"Maharastra",
	"Manipur",
	"Maghalaya",
	"Mizoram",
	"Nagaland",
	"Orissa",
	"Punjab",
	"Rajasthan",
	"Sikkim",
	"TN",
	"TS",
	"Tripura",
	"UP",
	"Uttarakhand",
	"WB"
];

var reviewerMappings = {
	"naazia.kauser":"sarojanandama.mattagunja",
	"sarojanandama.mattagunja":"merlin.annieraj",
	"merlin.annieraj":"naazia.kauser",
	"rajasekhar.vanapalli":"solomon.ch",
	"solomon.ch":"kalpana.payagulla",
	"kalpana.payagulla":"krishna.swathi",
	"krishna.swathi":"priyanka.gupta",
	"priyanka.gupta":"rajasekhar.vanapalli"
};

module.exports.cusineCodes = cusineCodes;
module.exports.reviewerMappings = reviewerMappings;