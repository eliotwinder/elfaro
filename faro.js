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
	
	

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        
        //add link change
        $(item).click(function(){
        	console.log(array[i]);
        	$("#googmap").attr("src",array[i].location);
        })

        // Set its contents:
        item.appendChild(document.createTextNode(array[i].name));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

var locations = [
		{
			name: "24th and mission",
			location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12618.368354008944!2d-122.41934789212647!3d37.75271286573755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xc3479e37f17ac921!2sTaquerias+El+Farolito!5e0!3m2!1sen!2sus!4v1420435101242"
		},
		{
			name: "24th and alabama",
			location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3154.5928118302563!2d-122.41097939999999!3d37.7526959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x04d563cdb72ff9be!2sTaquerias+El+Farolito!5e0!3m2!1sen!2sus!4v1420433432425"
		}
    
    ];

// Add the contents of options[0] to #foo:
document.getElementById('locationlist').appendChild(makeUL(locations));
	
	$("#alabama").click(function(){
		$("#googmap").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3154.5928118302563!2d-122.41097939999999!3d37.7526959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x04d563cdb72ff9be!2sTaquerias+El+Farolito!5e0!3m2!1sen!2sus!4v1420433432425")
	});
});
