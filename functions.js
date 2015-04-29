function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
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
		checkCookie();
		window.location.assign("index.html")
		
	});
	
	//-18
	$("h1:eq(1)").click(function(){
		alert("-18");
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



	
	 
	
	
	

