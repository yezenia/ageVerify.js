function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//Create elements and instance events
function displayBlock(){
		
	
	$("document").ready(function(){
		old = document.createElement("h1");
		teen = document.createElement("h1");
		old.innerHTML = "I have +18";
		teen.innerHTML = "I have -18";
	
	$("body").append(old, teen);
	
	//+18
	$("h1:first").click(function(){
		//window.location.assign("http://librosweb.es")
		alert("+18");
	});
	
	//-18
	$("h1:eq(1)").click(function(){
		alert("You are a young");
	});
	//acheUno.onclick =  mayorEdad;
	//acheDos.onclick = menorEdad;
	});
			
}

$("document").ready( function(){
		$("div").addClass("estilachos");
	 }
	); 

onload = displayBlock;

function teenAger(){
	window.location.assign("http://librosweb.es");
}


function adult(){
	
	document.write(document.cookie);
}


	
	 
	
	
	

