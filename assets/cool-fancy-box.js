( function ( $ ) {
	$( document ).ready( function () {
		$( "body" ).append( "<div class='fancycoolbox-temp-out'><div id='fancycoolbox-temp'></div> <a id='fancyclose'>X</a></div>" );
		
		$('#fancyclose').click(function(){
			$( ".fancycoolbox-temp-out" ).hide();
			$( "#fancycoolbox-temp" ).html( '' );
		});
		
		$('.cool-fancybox').click(function(){
			var href = $(this).attr("href");
			$( "#fancycoolbox-temp" ).html( '<div class="loader">Loading...</div>' );
			$( ".fancycoolbox-temp-out" ).show();
			//$( "#fancycoolbox-temp" ).html( '<img src="'+href+'" />' );
			return false;
		});
		
		$('.cool-fancybox-ajax').click(function(){
			var href = $(this).attr("href");
			$( "#fancycoolbox-temp" ).html( '<div class="loader">Loading...</div>' );
			$.ajax({
			  url: href,
			  data: {
				fancybox1: 1
			  },
			  success: function( result ) {
				$( ".fancycoolbox-temp-out" ).show();
				$( "#fancycoolbox-temp" ).html( result );
			  }
			});
			return false;
		});
	});
} )( jQuery );