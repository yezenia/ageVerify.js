function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


function displayBlock(){
		
	
	$("document").ready(function(){
		old = document.createElement("h1");
		teen = document.createElement("h1");
		old.innerHTML = "Soy Mayor de edad +18";
		teen.innerHTML = "Soy menor de 18 años";
	
	$("body").append(old, teen);
	$("h1").click(function(){
		alert("jelou");
	});
	//acheUno.onclick =  mayorEdad;
	//acheDos.onclick = menorEdad;
	});
			
}

onload = displayBlock;

function menorEdad(){
	window.location.assign("http://librosweb.es");
}


function mayorEdad(){
	
	document.write(document.cookie);
}


	$("document").ready( function(){
		$("div").addClass("estilachos");
	 }
	); 
	 
	
	
	
	$(document).ready(function(){
     $(document.h1).click(function(){
       alert("hola");
     });
	});
