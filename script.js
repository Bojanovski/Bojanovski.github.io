
function process_single_project(name, date, description, url) {
	var para = document.createElement("P");
	var name_txt = document.createTextNode(name);
	para.appendChild(name_txt);
	var date_txt = document.createTextNode(" (" + date + ")");
	para.appendChild(date_txt);
	return para;
}

function process_all_projects(object_list) {
	for (var i = 0; i < object_list.length; i++) {
		//console.log(object_list[i].name);
		var new_project = process_single_project(object_list[i].name, object_list[i].date, object_list[i].description, object_list[i].url);
		document.getElementById("projectsDIV").appendChild(new_project);     // Append to <div>
	}
}

window.onload = function() {
	for (var key in CONTENT) {
    if (CONTENT.hasOwnProperty(key)) {
		//console.log(key);
		if (key == "projects") {
			process_all_projects(CONTENT[key]);
		} else if (key == "publications") {
			console.log(key + " -> " + CONTENT[key]);
		} else {
		}
    }
}
};
