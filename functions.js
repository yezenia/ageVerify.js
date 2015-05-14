
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
		$.cookie('cookie_name', 'cookie_value', { expires: 2, path: '/', domain: 'yourwebsite.com', secure: true });
		$("body").hide("slow");
	});
	
	//-18
	$("h1:eq(1)").click( 
		function(){
		/*Npermission = document.createElement("p");
		Npermission.innerHTML = "You don't have permission to be here, go study";	
		$("body").append(Npermission);*/
		window.location.href = 'http://xxxsexy.cf';
	}
		
	);
	
	});
			
}
if( $("document")){
	
}
//load class css
$("document").ready( function(){
		$("body").addClass("estilachos");
		
	 }
	); 
	
	

onload = displayBlock;





	
	 
	
	
	

