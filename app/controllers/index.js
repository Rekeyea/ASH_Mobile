var navigation = Alloy.Globals.Navigation;

var conf = {
	mainWindow : undefined,
	index:"FacebookLogin",
	indexOptions :{
		transition:"none"
	},
	historyLimit:20,
	defaultOpenTransition: {transition: 'none', duration: Alloy.Globals.DuracionTransicion, transitionColor: "#fff"}, 
	defaultBackTransition: {transition: 'none', duration: Alloy.Globals.DuracionTransicion, transitionColor: "#000"},
	confirmOnExit:true
};

if (OS_IOS) {
	conf.defaultOpenTransition = {transition: 'slideInFromRight', duration: 150, transitionColor: "#fff"}; 
	conf.defaultBackTransition = {transition: 'slideInFromLeft', duration: 150, transitionColor: "#000"};
}

navigation.init(conf);
