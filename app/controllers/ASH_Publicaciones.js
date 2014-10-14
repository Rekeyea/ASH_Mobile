var facebook = Alloy.Globals.Facebook;
var servicios = Alloy.Globals.Servicios;
var navigation = Alloy.Globals.Navigation;
var datatypes = Alloy.Globals.DataTypes;

var idFacebook = facebook.uid;

var tiposPublicacion = {
	"Todos":0
};
var objPublicacion = datatypes.PublicacionObject(idFacebook,false,true,tiposPublicacion["Todos"],0,0,fload,ferror);
servicios.Ejecutar(objPublicacion);

function fload(resultado){
	var comentarios = resultado;
	var data = CrearLista(comentarios);
	$.onlySection.setItems(data);
}

function ferror(evt){
	alert(JSON.stringify(evt));
}

function CrearLista(collection){
	var res = [];
	_.each(collection,function(elem){
		var item = CrearListItem(elem);
		res.push(item);
	});
	return res;
}

function CrearListItem(elem){
	//TODO: Cambiar el nombre hardcodeado por el nombre que viene de verdad
	//elem.autor.nombre;
	var item = {
		template:"template",
		nomUsr:{
			text:"Federico"
		},
		picUsr:{
			image:"/nouser.png"
		},
		titPub:{
			text:elem.titulo
		},
		picPub:{
			image:"/noimage.jpg"
		},
		desPub:{
			text:elem.descripcion
		},
		numCom:{
			text:"Comentarios: "+elem.comentarios.length
		},
		comOwn:{
			idUser:elem.autor.IdFacebook
		},
		comPub:{
			idCom:elem.IdPublicacion
		},
		repPub:{
			idCom:elem.IdPublicacion
		}
	};
	
	return item;
}


function VerComentarios(evt){
	
}

function Contactar(evt){
	
}

function Denunciar(evt){
	
}

function Comentar(evt){
	
}
