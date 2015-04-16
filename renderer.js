var fs = require("fs");

function mergeValues(values, content) {
	//Cycle over the keys
	for (var key in values) {
		//Replace all {{key}} with values from object
		content = content.replace("{{" + key + "}}", values[key]);
	}
		
	//return merged content
}

function view(templateName, values, response) {
	//Read from template file
	var fileContents = fs.readFileSync('./views/' + templateName + '.html')
	//insert values into content
	fileContents = mergeValues(values, fileContents);
	
	//write out contents to response
	response.write(fileContents);
}

module.exports.view = view;