
//************************ VARIABLES DE LAYOUT **************************************
Alloy.Globals.Margen = 20;
Alloy.Globals.TamanoControlGrande = 50;
Alloy.Globals.TamanoControl = 38;
Alloy.Globals.MargenSiguienteControlGrande = 2*Alloy.Globals.Margen + Alloy.Globals.TamanoControlGrande;
Alloy.Globals.MargenSiguienteControl = 2*Alloy.Globals.Margen + Alloy.Globals.TamanoControl;
Alloy.Globals.Letra = "HelveticaNeue-Light";
//************************************************************************************

//************************ COMPONENTES MULTIPLATAFORMA  **************************************
Alloy.Globals.Plataforma = Ti.Platform.getOsname();

//************************************************************************************

//************************** CONSTANTES **********************************************

Alloy.Globals.URL = "http://ashservices.azurewebsites.net/Service1.svc";
Alloy.Globals.DuracionTransicion = 200;
//************************************************************************************

//************************** MODULOS **********************************************

Alloy.Globals.Facebook = require("facebook");
Alloy.Globals.Servicios = require("Service");
Alloy.Globals.Navigation = Alloy.createController("navigation");
Alloy.Globals.DataTypes = require("DataTypes");

//************************************************************************************