function change_visible(name){
	var a = document.getElementById(name).style.display;
	if(a=="none")
		document.getElementById(name).style.display="block"
	else
		document.getElementById(name).style.display="none";
	}