 

$(document).ready(function() {    // do once original document loaded and ready


		//ADD COURSE TO SCHEDULE
        $('#addToSchedule').click(function(event) {
        	var course = $('#courseinput').text();
        	var lecture	= $('#lectureinput').text();
        	var time= $('#timeinput').text();

					localStorage.setItem("myschedule",
					 ( course + ", " + lecture +
					  ", " + time));
        	  document.getElementById("output2").innerHTML 
        	  = localStorage.getItem("myschedule");

	
		});

        //GET Requesting course info
		$('#f2').submit(function(event) {
        	event.preventDefault()
        	//pull name from the form
        	var course = $('#coursenum').val();
        	var lecture = $('#lecture').val();
        	var time = $('#time').val();
				$.ajax({
				    url: '/' + course + '/' + lecture,
				    type: 'GET',

				    success: function(result) {
				    	// search for course

				    	$('#courseinput').html("course :" + course);
				    	$('#lectureinput').html("lecture :" +lecture);
				    	$('#timeinput').html("time :" +time);
				      },
				    error: function(jqxhr){
				    	console.log(jqxhr)
				    }	      

				    });
		});

		$('#allCourses').click(function(event) {
        	event.preventDefault()
        	//list all courses

				$.getJSON('../courses.json',function(data) {
					
					$('#listCourses').html(JSON.stringify(data))
					console.log("data", data);
				})
		});




		
});
