
//Create elements and instance events
function displayBlock(){
		
	
	$("document").ready(function(){
		old = document.createElement("h1");
		teen = document.createElement("h1");
		old.innerHTML = "I have +18";
		teen.innerHTML = "I have -18";
	
	$("#Show-page").append(old, teen);
	
	//+18
	$("h1:first").click(function(){
		$.cookie('cookie_name', 'cookie_value', { expires: 2, path: '/', domain: 'yourwebsite.com', secure: true });
		$("#Show-page").hide(2000);
	});
	
	//-18
	$("h1:eq(1)").click( 
		function(){
		window.location.href = 'http://xxxsexy.cf';
		}
	);
	});
			
}

	
//load class css
/*$("document").ready( function(){
		$("body").addClass("estilachos");
		
	 }
	); 
	*/
	
	//When the page is ready, 
$("document").ready(function(){
		$("#Show-page").addClass("show").addClass("styleBody");
}	
);

onload = displayBlock;





	
	 
	
	
	

