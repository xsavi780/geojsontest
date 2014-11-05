var map = L.map('map').setView([40.68025, -74.00155], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

var marker = L.marker([40.68025, -74.00155]).addTo(map);
marker.bindPopup("Larry's house").openPopup();

function popUp(feature, layer) {
  layer.bindPopup(feature.properties.name);
}


//Get external geoJSON file
var geojsonLayer = new L.GeoJSON.AJAX("./js/testgeojson.json",{onEachFeature:popUp});

geojsonLayer.addTo(map);