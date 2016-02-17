/*Json script to call looks*/

$(document).ready(function() {
	            $('#look1').click(function(look1){
	            	//remove div no-look
	            	$( "#no-look" ).remove();
	            	$( ".no-look.look-data" ).removeClass( "no-look look-data" ).addClass( "info look-data" );
	            	//hide previous
					$( ".look-item h4" ).remove();
					$( ".look-item p" ).remove();
					$( ".look-item div" ).remove();
	                //start ajax request
					$.ajax({
			 			url: 'data/one.json',
			 			dataType: 'json',
			 			type: 'get',
			 			cache: false,
			 			success: function(data) {
			 				$(data.item).each(function(index, value) {
			 					var jsonp = "<h4>" + value.name + "</h4>"
					           $(jsonp).appendTo("#look-item-name");
			 				});
			 				$(data.item).each(function(index, value) {
			 					var jsonp = "<p>" + value.details + "</p>"
					           $(jsonp).appendTo("#look-item-details");
			 				});
							$(data.item).each(function(index, value) {
			 					var jsonp = "<p>" + value.composition + "</p>"
					           $(jsonp).appendTo("#look-item-comp");
			 				});
			 				$(data.item.modelDetails).each(function(index, value) {
			 					var jsonp = "<p>" + value + "</p>"
					           $(jsonp).appendTo("#look-model-details");
			 				});
			 				$(data.item.images).each(function(index, value) {
			 					var jsondiv = "<div><a href=" + value + " data-lightbox=\"image-slide\"><img src=" + value + " alt=image" + (index+1) + " title=image" + (index+1) + "></img></a></div>"
					           $(jsondiv).appendTo("#look-images");
					           $( "#look-images div" ).addClass( "images col-xs-6" );
					           $( ".images img" ).addClass( "img-responsive" );
			 				});
			 			}
			 		});

				});
				$('#look2').click(function(look2){
					$( "#no-look" ).remove();
	            	$( ".no-look.look-data" ).removeClass( "no-look look-data" ).addClass( "info look-data" );
					$( ".look-item h4" ).remove();
					$( ".look-item p" ).remove();
					$( ".look-item div" ).remove();
			 		$.ajax({
			 			url: 'data/two.json',
			 			dataType: 'json',
			 			type: 'get',
			 			cache: false,
			 			success: function(data) {
			 				$(data.item).each(function(index, value) {
			 					var jsonp = "<h4>" + value.name + "</h4>"
					           $(jsonp).appendTo("#look-item-name");
			 				});
			 				$(data.item).each(function(index, value) {
			 					var jsonp = "<p>" + value.details + "</p>"
					           $(jsonp).appendTo("#look-item-details");
			 				});
							$(data.item).each(function(index, value) {
			 					var jsonp = "<p>" + value.composition + "</p>"
					           $(jsonp).appendTo("#look-item-comp");
			 				});
			 				$(data.item.modelDetails).each(function(index, value) {
			 					var jsonp = "<p>" + value + "</p>"
					           $(jsonp).appendTo("#look-model-details");
			 				});
			 				$(data.item.images).each(function(index, value) {
			 					var jsondiv = "<div><a href=" + value + " data-lightbox=\"image-slide\"><img src=" + value + " alt=image" + (index+1) + " title=image" + (index+1) + "></img></a></div>"
					           $(jsondiv).appendTo("#look-images");
					           $( "#look-images div" ).addClass( "images col-xs-6" );
					           $( ".images img" ).addClass( "img-responsive" );
			 				});
			 			}
			 		});

				});
				$('#look3').click(function(look3){
					$( "#no-look" ).remove();
	            	$( ".no-look.look-data" ).removeClass( "no-look look-data" ).addClass( "info look-data" );
					$( ".look-item h4" ).remove();
					$( ".look-item p" ).remove();
					$( ".look-item div" ).remove();
			 		$.ajax({
			 			url: 'data/three.json',
			 			dataType: 'json',
			 			type: 'get',
			 			cache: false,
			 			success: function(data) {
			 				$(data.item).each(function(index, value) {
			 					var jsonp = "<h4>" + value.name + "</h4>"
					           $(jsonp).appendTo("#look-item-name");
			 				});
			 				$(data.item).each(function(index, value) {
			 					var jsonp = "<p>" + value.details + "</p>"
					           $(jsonp).appendTo("#look-item-details");
			 				});
							$(data.item).each(function(index, value) {
			 					var jsonp = "<p>" + value.composition + "</p>"
					           $(jsonp).appendTo("#look-item-comp");
			 				});
			 				$(data.item.modelDetails).each(function(index, value) {
			 					var jsonp = "<p>" + value + "</p>"
					           $(jsonp).appendTo("#look-model-details");
			 				});
			 				$(data.item.images).each(function(index, value) {
			 					var jsondiv = "<div><a href=" + value + " data-lightbox=\"image-slide\"><img src=" + value + " alt=image" + (index+1) + " title=image" + (index+1) + "></img></a></div>"
					           $(jsondiv).appendTo("#look-images");
					           $( "#look-images div" ).addClass( "images col-xs-6" );
					           $( ".images img" ).addClass( "img-responsive" );
			 				});
			 			}
			 		});

				});
				$('#look4').click(function(look4){
					$( "#no-look" ).remove();
	            	$( ".no-look.look-data" ).removeClass( "no-look look-data" ).addClass( "info look-data" );
					$( ".look-item h4" ).remove();
					$( ".look-item p" ).remove();
					$( ".look-item div" ).remove();
			 		$.ajax({
			 			url: 'data/four.json',
			 			dataType: 'json',
			 			type: 'get',
			 			cache: false,
			 			success: function(data) {
			 				$(data.item).each(function(index, value) {
			 					var jsonp = "<h4>" + value.name + "</h4>"
					           $(jsonp).appendTo("#look-item-name");
			 				});
			 				$(data.item).each(function(index, value) {
			 					var jsonp = "<p>" + value.details + "</p>"
					           $(jsonp).appendTo("#look-item-details");
			 				});
							$(data.item).each(function(index, value) {
			 					var jsonp = "<p>" + value.composition + "</p>"
					           $(jsonp).appendTo("#look-item-comp");
			 				});
			 				$(data.item.modelDetails).each(function(index, value) {
			 					var jsonp = "<p>" + value + "</p>"
					           $(jsonp).appendTo("#look-model-details");
			 				});
			 				$(data.item.images).each(function(index, value) {
			 					var jsondiv = "<div><a href=" + value + " data-lightbox=\"image-slide\"><img src=" + value + " alt=image" + (index+1) + " title=image" + (index+1) + "></img></a></div>"
					           $(jsondiv).appendTo("#look-images");
					           $( "#look-images div" ).addClass( "images col-xs-6" );
					           $( ".images img" ).addClass( "img-responsive" );
			 				});
			 			}
			 		});
	 		    });

        	});
