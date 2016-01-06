var map;
var marker;
var circle;
var animation;

function initMap () {
	var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
	map = new google.maps.Map(document.getElementById('map'), {
	  center: myLatlng,
	  zoom: 12
	});

	createMarker(myLatlng);
	drawCircle(myLatlng);
}

function createMarker(latLng){
	marker = new google.maps.Marker({
	  position: latLng,
	  title:"Hello World!",
	  map: map
	});
}

function drawCircle(latLng){
	circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
    fillOpacity: 0,
    map: map,
    center: latLng,
    radius: 0
  });
  animateCircle();
}

function animateCircle() {
	var count = 0;
  animation = window.setInterval(function() {
  	count++;
  	if (count <= 10){
  		circle.setRadius(count * 200);
  		var opacity = circle.strokeOpacity - 0.10;
  		circle.setOptions({strokeOpacity: opacity});
  	}else{
  		count = 0;
  		circle.setRadius(count * 200);
  		circle.setOptions({strokeOpacity: 1});
  	}
  }, 150);
}