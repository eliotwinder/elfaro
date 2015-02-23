$(function() {
	$('.fade').slick({
	  dots: true,
	  infinite: true,
	  speed: 800,
	  fade: true,
	  slide: 'div',
	  cssEase: 'linear',
	  autoplay: true, 
	  arrows: false,
	});
	
	

function makeUL(locations) {
    // Create the list element:
    var list = document.createElement('ul'); 

    // looping over an object
    // see http://stackoverflow.com/questions/684672
    for (var key in locations) {
		if (locations.hasOwnProperty(key)) {
			
			// Create the list item:
	        var item = document.createElement('li');
	        
	        // Set its contents:
	        item.appendChild(document.createTextNode(locations[key].name));

	        item.setAttribute('data-location-code', key);

	        // Add it to the list:
	        list.appendChild(item);

		}
	}

    // Finally, return the constructed list:
    return list;
}

var locationData = {
    "mission": {
    	name: "24th and mission",
    	mapUrl: "pb=!1m14!1m8!1m3!1d12618.368354008944!2d-122.41934789212647!3d37.75271286573755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xc3479e37f17ac921!2sTaquerias+El+Farolito!5e0!3m2!1sen!2sus!4v1420435101242",
    },

    "alabama": {
    	name: "24th and alabama",
    	mapUrl: "pb=!1m14!1m8!1m3!1d3154.5928118302563!2d-122.41097939999999!3d37.7526959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x04d563cdb72ff9be!2sTaquerias+El+Farolito!5e0!3m2!1sen!2sus!4v1420433432425",
    },
};

// Add the contents of options[0] to #foo:
document.getElementById('locationlist').appendChild(makeUL(locationData));


// we will listen for click event on all the 'li' items within 'ul' within '#locationlist'
$("#locationlist > ul > li").click(function(){

	// using one base code to avoid duplication
	var gMapsBaseURL = "https://www.google.com/maps/embed?";

	// first get the item that was clicked
    var listItem = $(this);

    // now get the location code that is set as a 'data-location-code' attribute
    var locationCode = listItem.data('location-code');

    // build full map url
    var fullMapURL = gMapsBaseURL + locationData[locationCode].mapUrl;

    // set the new url in the gmap iframe
	$("#googmap").attr("src", fullMapURL)
});

//navigation links
	//hide maps
	$("#maps").hide();

	$("#homelink").click(function(){
		$(".fade").show();
		$("#maps").hide();
	});
	$("#locationlink").click(function(){
		$("#maps").show();
		$(".fade").hide();
	}); //end click locationlink
	
});




