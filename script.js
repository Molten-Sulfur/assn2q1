// initialize the map
var map = L.map('restaurantMap').setView([38.625, -90.286538], 12);

// initialize the basemap layer
var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

// A function we'll use later that will add a popup to each marker.
function onEachFeature(feature, layer) { layer.bindPopup(
	"<p1><b><a href="+ feature.properties.url + ">" + feature.properties.name + "</a></b><br/>" + feature.properties.description);
}

// For this app, I'm going to put the geojson in the actual script.js file. I know, I know, it's inelegant.
var restPoints = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Salt and Smoke",
        "description": "Our favorite bbq joint. We always take out-of-town visitors here.",
        "url": "https://saltandsmokebbq.com"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.30506101804117,
          38.65612871682558
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Morning Glory Diner",
        "description": "Best slinger in the city!",
        "url": "https://morningglorydiner.square.site/"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.2259506603557,
          38.59344865082094
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Mai Lee",
        "url": "https://www.maileestl.com/",
        "description": "My wife's favorite Vietnamese joint."
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.33737814862232,
          38.62746928042913
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "url": "https://www.urbanchestnut.com/visit/the-grove-brewery-and-bierhall",
        "name": "Urban Chestnut Bierhall",
        "description": "Good thin-crust pizza to go with your beer"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.26098196175731,
          38.62663719046965
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "description": "Top-notch Lebanese food",
        "url": "https://www.thevinestl.com/thevinecafe/Home.html",
        "name": "The Vine"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.24284498768233,
          38.60031501305363
        ]
      }
    }
  ]
}

// Then we add the geojson to the map and call that function we set up earlier.
L.geoJSON(restPoints, {
    onEachFeature: onEachFeature
}).addTo(map);
