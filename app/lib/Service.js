exports.Ejecutar = function(obj){
	var URL = Alloy.Globals.URL;
	var metodo = obj["metodo"];
	var endpoint = obj["endpoint"];
	var fload = obj["load"];
	var ferror = obj["error"];
	var data = obj["data"];
	
	var cliente = Ti.Network.createHTTPClient({
		onload:function(evt){
			fload(JSON.parse(this.responseText));
		},
		onerror:ferror
	}); 
	URL = URL+"/"+endpoint;
	Ti.API.info(URL);
	cliente.open(metodo,URL);
	cliente.setRequestHeader("Content-Type","application/json");
	if(typeof data != "string"){
		data = JSON.stringify(data);	
	}
	cliente.send(data);
};


