var phoneNav, phoneNavIcon;

//-----------





//----After init----
window.onload = function(){
	phoneNav = document.getElementById('Nav_Phone');
	phoneNavIcon = document.getElementById('PhoneNavIcon');
	
	
	//----phone's nav openOrClose----
	document.addEventListener('click', function(){
		console.log("test");
		//phoneNav.slideUp(300);
	}, true);
	phoneNavIcon.addEventListener('click', function(){
		
console.log(phoneNav+" , "+phoneNavIcon);
		//phoneNav.slideDown(300);
	}, true);
	
}
	
	



//-----------
/* check screensize
var w = screen.width, h = screen.height;
alert(w+" , "+h);
*/