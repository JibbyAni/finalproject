 

$(document).ready(function() {    // do once original document loaded and ready


		//ADD COURSE TO SCHEDULE
        $('#addToSchedule').click(function(event) {
        	var course = $('#courseinput').text();
        	console.log(course);
        	var lecture	= $('#lectureinput').text();
        	var time= $('#timeinput').text();
        	// event.preventDefault()
         	 // $.getJSON('../courses1.json',function(data) {
					localStorage.setItem("myschedule",
					 ("course: "+ course + ", " + "lecture :" + lecture +
					  ", " + "time :" + time));
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
				    // data: {
				    // 	"course": course
				    // 	"lecture" : lecture
				    // },
				    success: function(result) {
				    	// search for course
				    	$('#courseinput').html(course);
				    	$('#lectureinput').html(lecture);
				    	$('#timeinput').html(time);
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
					
					$('#listCourses').html(JSON.stringify(data))
					console.log("data", data);
				})
		});




		
});
