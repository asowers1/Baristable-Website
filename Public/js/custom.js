$(document).ready(function(){

	// prettyPhoto
	$("a[data-gal^='prettyPhoto']").prettyPhoto();

	// DataTimePicker
	$(function() {
    	$('.data').datetimepicker();
  	});

  	//iPhone iPad fixed scroll DateTimePicker
  	$('.ui-timepicker-div').draggable();
  	
});
