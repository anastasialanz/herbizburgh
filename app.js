var mymap = L.map('mapid').setView([40.4406, -79.9958], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYW5hc3Rhc2lhbGFueiIsImEiOiJjamZoazg3YXUwMDB1MnFvZHlmMXJ4dDZ4In0.DBDgXzKxBnJD1WZkguY3vw'
}).addTo(mymap);

// var test = L.marker([40.4435253, -79.8943066]).addTo(mymap);

// test.bindPopup("Shiny Happy Cleaners LLC").openPopup();

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1epO-yMwljljr1ziZT4uNIrngV2blM_0w5Io0NvhU5-0/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);
  }

  window.addEventListener('DOMContentLoaded', init);