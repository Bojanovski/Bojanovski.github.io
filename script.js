
window.onload = function() {
	
	var client = new XMLHttpRequest();
	client.open('GET', 'http://localhost/data/content.json');
	
	client.onreadystatechange = function() {
		alert(client.responseText);
}

	client.send();
};
