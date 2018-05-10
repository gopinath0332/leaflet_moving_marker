var map = L.map("map").setView([12.9716, 77.5946], 15);
var tileLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
   id: 'mapbox.streets',
   accessToken: 'pk.eyJ1IjoiZ29waW5hdGgwMzMzMiIsImEiOiJjamdzeDg3YXIwNTg0MndwZzl4bmVtcXY2In0.prYA_pwGLUmeSKbMUALBMQ'
}).addTo(this.map);