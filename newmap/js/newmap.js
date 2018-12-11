$(window).on('resize', function() {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
})


var map;

  // controlUI.addEventListener('hover', function() {
  //   map.setCenter(perak);
  // });






// Initialize and add the map
function initMap() {
  // The location of malayia

var malaysia = {lat: 3.682417, lng: 101.864123};

var perak = {lat: 4.618549, lng: 101.062187};

var kedah = {lat: 6.125776, lng: 100.325854};

var selangor = {lat: 3.089145, lng: 101.543118};

var newglasgow = {lat: 45.587323, lng: -62.645307};

var fredericton = {lat: 45.964748, lng: -66.653518};



  // The map, centered at malaysia
  var map = new google.maps.Map(
      document.getElementById('map'), {
      	zoom: 8, 
      	center: malaysia,
      	styles: [
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": -5
            },
            {
                "color": "#b0b0b0"
            },
            {
                "weight": 1.7
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#FFB3B3"
            },
            {
                "lightness": 26
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#FFB3B3"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "color": "#FFB3B3"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#FFB3B3"
            },
            {
                "lightness": 66
            }
        ]
    }
]

      });

// var iconBase = <"marker-01.png">
//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     icon: iconBase + <"marker-01.png">
//   });  

// Create a Marker
// var marker = new google.maps.Marker({
//     position: location,
//     map: map,
//     title:'marker-01.png'
//   });


// // Set Icon on any event
// google.maps.event.addListener(marker, "rightclick", function() {
//         marker.setIcon('marker-01.png'); // set image path here...
// });

// var image = 'marker-01.png';
// var marker = new google.maps.Marker({
//         position: location,
//         map: globalMap,
//         icon: image
// });

// marker.setMap(map);


pops = ['#MomPop', '#DadPop', '#SelangorPop','#MeetingPop','#MarriagePop','#CanadaPop','#JasminePop','#FrederictonPop','#AbbeyPop','#RestaurantPop','#LydiaPop','#PresentPop']
hideAllShowOne('')

  // The marker, positioned at perak
  var marker = new google.maps.Marker({position: malaysia, map: map});
  var marker = new google.maps.Marker({position: perak, map: map});
  var marker = new google.maps.Marker({position: kedah, map: map});
  var marker = new google.maps.Marker({position: selangor, map: map});
  var marker = new google.maps.Marker({position: newglasgow, map: map});
  var marker = new google.maps.Marker({position: fredericton, map: map});

var location = 'm'

$("#Mom").click(function(){
    goto(perak);
    location = 'm'
    hideAllShowOne('#MomPop');
});

$("#Dad").click(function(){
	goto(kedah)
    location = 'm'
    hideAllShowOne('#DadPop');

})

$("#Selangor").click(function(){
	goto(selangor)
    location = 'm'
    hideAllShowOne('#SelangorPop');
})

$("#Meeting").click(function(){
    goto(selangor)
    location = 'm'
    hideAllShowOne('#MeetingPop');
})

$("#Marriage").click(function(){
    goto(selangor)
    location = 'm'
    hideAllShowOne('#MarriagePop');
})

$("#Canada").click(function(){
    goto(newglasgow)
    location = 'c'
    hideAllShowOne('#CanadaPop');
})

$("#Jasmine").click(function(){
    goto(newglasgow)
    location = 'c'
    hideAllShowOne('#JasminePop');
})


$("#Fredericton").click(function(){
    goto(fredericton);
    location = 'c'
    hideAllShowOne('#FrederictonPop');
     
})

$("#Abbey").click(function(){
    goto(fredericton)    
    location = 'c'
    hideAllShowOne('#AbbeyPop');
})

$("#Restaurant").click(function(){
    goto(fredericton)
    location = 'c' 
    hideAllShowOne('#RestaurantPop');
})

$("#Lydia").click(function(){
    
    goto(fredericton)
    location = 'c'
    hideAllShowOne('#LydiaPop');
})


$("#Present").click(function(){
    
    goto(fredericton)
    location = 'c'
    hideAllShowOne('#PresentPop');
})

function goto(place){
    // In can.
    if(place.lat > 45){
        console.log(location)
        if(location == 'm'){
            inOut(place)
        }
        else{
            map.panTo(place)
        }
    }
    // In mal
    else{
        console.log(location)
        if(location == 'c'){
            inOut(place)
        }
        else{
            map.panTo(place)   
        }
    }

}

function inOut(place){
    zoomOut() 
    setTimeout(function(){map.panTo(place)}, 2000);
    setTimeout(function(){zoomIn()}, 3000);
}

function hideAllShowOne(show){
    for(var i = 0; i < pops.length; i++){
        $(pops[i]).hide()
    }
    $(show).show()
}

function zoomOut(){

    for(var i = 0; i < 4; i+=0.1){
        setTimeout(function(){map.setZoom(8-i)}, 50);
    }
}

function zoomIn(){
    for(var i = 4; i <= 8; i+=0.1){
        setTimeout(function(){map.setZoom(i)}, 50);
    }
}

}


