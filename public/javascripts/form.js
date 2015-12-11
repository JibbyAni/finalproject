 
$(document).ready(function() {    // do once original document loaded and ready

		//PUT request 
        $('#f1').submit(function(event) {
        	event.preventDefault()

        	//pull variables from the form
        	var name = $('#name').val();
        	var place =  $('#place').val();
        	var programConnection = $('#programConnection').val();
				$.ajax({
				    url: '/brigade' ,
				    type: 'PUT',
				    data: {
				    	"name": name,
				    	"place": place,
				    	"programConnection": programConnection
				    },
				    success: function(result) {
					   $('#name3').val(name);
					   $('#place3').val(place);
					   $('#pConn').val(programConnection);
		   
				     },
				    error: function(jqxhr){
				    	console.log(jqxhr)
				    }
					});
		});

        //GET Request
		$('#f2').submit(function(event) {
        	event.preventDefault()
        	//pull name from the form
        	var name = $('#name2').val();
        	// var place =  $('#place').val();
        	// var programConnection = $('#programConnection').val();

				$.ajax({
				    url: '/brigade',
				    type: 'GET',
				    data: {
				    	"name": name
				    },
				    success: function(result) {
				    	// add output of brigade with that name
				    	$('#output').html("<p> The brigade is "+ name +
				    		" currently exists</p>");
				      },
				    error: function(jqxhr){
				    	console.log(jqxhr)
				    }	      

				    });
		});

		$('#listBrigades').click(function(event) {
        	event.preventDefault()
        	//list all brigades 
				$.ajax({
				    url: '/brigade',
				    type: 'GET',
				    success: function(result) {
				    	console.log(result);
				    	$('#listBrigades').html(result);
					},
				      error: function(jqxhr){
				    	console.log(jqxhr)
				    }	
				    });

		});

		//POST request
		$('#f3').on( "click", 'button',function(event) {
			
    
        	//pull variables from table
        	
			var name = $('#name3').val();
         	var place =  $('#place3').val();
        	var programConnection = $('#pConn').val();

				$.ajax({
				    url: '/brigade' ,
				    type: 'POST',
				    data: {
				    	"name": name,
				    	"place": place,
				    	"programConnection": programConnection
				    },
				    success: function(result) {
				  		$('#output3').html("<p> The brigade "+ name +
				    		" is now in "+place + " which is now in conjuction with " +
				    		 programConnection+"</p>");
				      },
				      error: function(jqxhr){
				    	console.log(jqxhr)
				    }	
				    });
		});

		//DELETE Request
		$('#deletebrigade').click(function(event) {
        	event.preventDefault()
        	//pull name from table
        	var name = $('#name3').val();
				$.ajax({
				    url: '/brigade' ,
				    type: 'DELETE',
				    data: {
				    	"name": name,
				    },
				    success: function(result) {
				    $('#name3').val("");
				    $('#place3').val("");
				    $('#pConn').val("");
				      $('#output3').html("<p>"+result+"</p>");
				      },
				      error: function(jqxhr){
				    	console.log(jqxhr)
				    }	
				    });

		});


		
});
