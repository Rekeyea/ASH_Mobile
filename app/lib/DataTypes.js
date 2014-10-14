exports.LoginObject = function(idFacebook,fload,ferror){
	var res = {
		"data":idFacebook,
		"metodo":"POST",
		"endpoint":"IniciarSesion",
		"load":fload,
		"error":ferror
	};
	return res;
};

exports.PublicacionObject = function(idFacebook,masCerca,recientes,tipo,latitud,longitud,fload,ferror){
	var data = {
		"IdFacebook":idFacebook,
		"masCerca":masCerca,
		"recientes":recientes,
		"tipo":tipo,
		"ubicacion_actual_x":latitud,
		"ubicacion_actual_y":longitud
	};
	var res = {
		"data":data,
		"metodo":"POST",
		"endpoint":"VerPublicaciones",
		"load":fload,
		"error":ferror
	};
	return res;
};
