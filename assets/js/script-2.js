var tileLayer = new L.TileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 22,
  id: 'mapbox/streets-v11',
  accessToken: 'pk.eyJ1IjoiZmxvcnF1aXF1ZSIsImEiOiJjazZqM3N3bWgwNWgwM2xwNWF5bWRrMThpIn0.ZNyIK6yFZoRvFxptgdpqZw'
});

var mymap = new L.Map('mapid', {
  'center': [41.387, 2.17],
  'zoom': 15,
  'layers': [tileLayer]
});

var marker;

mymap.on('click', function (e) {
  
  //agrega marcador
  if (marker) {
    mymap.removeLayer(marker);
  }
  marker = new L.Marker(e.latlng).addTo(mymap);

  marker.bindPopup(popup); //suma el popup al marker

  //agrega popup con data de coordenadas
  popup
      .setLatLng(e.latlng) // Setea el punto donde se abrirá el popup
      .setContent("Las coordenadas son:<br> " +  e.latlng.lat.toString() + " y " +  e.latlng.lng.toString())
      .openOn(mymap); // Carga el popup y cierra el anterior

});

var popup = L.popup();
