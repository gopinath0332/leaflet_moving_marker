var map = L.map("map").setView([12.9716, 77.5946], 16);
var tileLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
   id: 'mapbox.streets',
   accessToken: 'pk.eyJ1IjoiZ29waW5hdGgwMzMzMiIsImEiOiJjamdzeDg3YXIwNTg0MndwZzl4bmVtcXY2In0.prYA_pwGLUmeSKbMUALBMQ'
}).addTo(this.map);

var panCount = 0;
var index = 0;
var animateTime = 5000;

var marker = L.Marker.movingMarker([
   [12.9716, 77.5946],
   [12.9716, 77.5950]
], [animateTime], {
   onAnimate: () => { // on  animate function is added custom in marker plugin. Hence use this plugin in future if needed.
      panCount++;
      if (panCount > 70) {
         panCount = 0;
         map.panTo(marker.getLatLng());
      }
   }
}).addTo(map);

marker.start();

var coords = [
   [12.9690, 77.6090],
   [12.9690, 77.6010],
   [12.9690, 77.6110],
   [12.9590, 77.6210]
]

/* setTimeout(() => {
   marker.addLatLng([12.9690, 77.6110],5000);
}, 500); */

function udpateCoord() {
   if (coords[index]) {
      var latlng = L.latLng(coords[index][0], coords[index][1]);
      marker.moveTo(latlng, animateTime);
      if (index !== coords.length) {
         setTimeout(udpateCoord, animateTime);
      }
      index++;
   }

}

udpateCoord();
