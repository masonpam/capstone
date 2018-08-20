//*JS for map*//

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 19.432608,
      lng: -99.133209
    },
    zoom: 8
  });
}