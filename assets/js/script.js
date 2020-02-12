// L.map es la clase central de la API
var mymap = L.map('mapid').setView([41.387, 2.17], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 22,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZmxvcnF1aXF1ZSIsImEiOiJjazZqM3N3bWgwNWgwM2xwNWF5bWRrMThpIn0.ZNyIK6yFZoRvFxptgdpqZw'
}).addTo(mymap);

L.control.scale().addTo(mymap);

// marcador
var marker = L.marker([41.3868561, 2.1661102],{draggable: true}).addTo(mymap);

// cartelito
marker.bindPopup("<b>¡Aquí está el restaurante!</b><br>Calle Balmes, 16, 08007, Barcelona <3");