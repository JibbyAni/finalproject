 
$(document).ready(function() {    // do once original document loaded and ready

		//PUT request create
        $('#addCourse').submit(function(event) {
        	event.preventDefault()

        	//pull variables from the form
        	var course = $('#course').val();
        	var lecture =  $('#lecture').val();

				$.ajax({
				    url: '/' + course + '/' + lecture,
				    type: 'PUT',
				    data: {
				    	"course": course,
				    	"lecture": lecture
				    },
				    success: function(result) {
  					console.log("success")
  					$('#output2').html("<p> The course"+ course + "," + lecture +
				    		" has been added to your schedule</p> ");
		   
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
        	var course = $('#coursenum').val();
        	var lecture = $('#lecture').val();
        	// somehow have my time show as well 

				$.ajax({
				    url: '/' + course + '/' + lecture,
				    type: 'GET',
				    // data: {
				    // 	"course": course
				    // 	"lecture" : lecture
				    // },
				    success: function(result) {
				    	// search for course
				    	$('#output').html("<p>"+ course + "," + lecture +
				    		"</p> ");
				      },
				    error: function(jqxhr){
				    	console.log(jqxhr)
				    }	      

				    });
		});

		$('#allCourses').click(function(event) {
        	event.preventDefault()
        	//list all brigades 
				$.getJSON('../courses1.json',function(data) {
					console.log("data", data)
					$('#listCourses').html(data);
				})
		});

		//POST request update
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

		// //DELETE Request
		// $('#deletebrigade').click(function(event) {
  //       	event.preventDefault()
  //       	//pull name from table
  //       	var name = $('#name3').val();
		// 		$.ajax({
		// 		    url: '/brigade' ,
		// 		    type: 'DELETE',
		// 		    data: {
		// 		    	"name": name,
		// 		    },
		// 		    success: function(result) {
		// 		    $('#name3').val("");
		// 		    $('#place3').val("");
		// 		    $('#pConn').val("");
		// 		      $('#output3').html("<p>"+result+"</p>");
		// 		      },
		// 		      error: function(jqxhr){
		// 		    	console.log(jqxhr)
		// 		    }	
		// 		    });

		// });

		// $('#findTime').click(function(event) {
		// 	event.preventDefault()
		// 	$.ajax({
		// 		url: '/' ,

		// 		console.log("HERE")
		// 		$('#output3').html("<p> The time that you are not free today includes: "+ "</p>");
		// 		      }
		// 	})



		// });

 		// $('#findTime').click(function(event) {
		// 	event.preventDefault()
		// 	$.ajax({
		// 		url: '/' ,

		// 		console.log("HERE")
		// 		$('#output3').html("<p> The time that you are not free today includes: "+ "</p>");
		// 		      }
		// 	})



		// });


		
});
