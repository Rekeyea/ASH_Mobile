var facebook = Alloy.Globals.Facebook;
var servicios = Alloy.Globals.Servicios;
var navigation = Alloy.Globals.Navigation;
var datatypes = Alloy.Globals.DataTypes;


facebook.appid = "806668239384942";
facebook.permissions = ["public_profile","email"];
$.fbButton.style = facebook.BUTTON_STYLE_WIDE;

function Siguiente(){
	if(facebook.loggedIn){
		var id = facebook.uid;
		var objLogin = datatypes.LoginObject(id,fload,ferror);
		servicios.Ejecutar(objLogin);
	}
}
Siguiente();

facebook.addEventListener("login",function(evt){
	if(evt.success){
		Siguiente();	
	}else{
		Ti.UI.createAlertDialog({
			title:"Animales sin Hogar",
			message:"No fué posible iniciar sesión con Facebook!"
		}).show();
	}
});


function fload(evt){
	//abro la otra ventana
	navigation.open("ASH_Publicaciones", {title: "Publicaciones"});
}

function ferror(evt){
	Ti.UI.createAlertDialog({
		title:"Animales sin Hogar",
		message:"La respuesta obtenida del servidor fué incorrecta! "+JSON.stringify(evt)
	}).show();
}
