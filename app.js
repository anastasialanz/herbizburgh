var mymap = L.map('mapid').setView([40.4406, -79.9958], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYW5hc3Rhc2lhbGFueiIsImEiOiJjamZoazg3YXUwMDB1MnFvZHlmMXJ4dDZ4In0.DBDgXzKxBnJD1WZkguY3vw'
}).addTo(mymap);

let xhr = new XMLHttpRequest();
xhr.open('GET', 'herbizburgh.geojson');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        L.geoJSON(JSON.parse(xhr.responseText), {
          onEachFeature: onEachFeature
        }).addTo(mymap);
    }
};
xhr.send();

function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.business) {
      layer.bindPopup('<h3>' + feature.properties.business + '</h3>');
  }
}
