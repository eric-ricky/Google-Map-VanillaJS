## Google Map Clone Vanilla JS

A full featured google map clone using [Mapbox API](https://www.mapbox.com/directions/). Displaying driving, cycling, or walking directions on the map. The Mapbox API is powered by the [OSRM](http://project-osrm.org/) routing engine and open data from the [OpenStreetMap](https://www.openstreetmap.org/) project.

For directions functionality in native mobile and desktop applications, see [Mapbox Android Services](https://github.com/mapbox/mapbox-java/), [MapboxDirections.swift](https://github.com/mapbox/MapboxDirections.swift/), and [MapboxNavigation.swift](https://github.com/mapbox/MapboxNavigation.swift/).

### Usage

```javascript
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: center, // starting position [lng, lat]
  zoom: 15,
});

const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

const directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
});

map.addControl(directions, "top-left");
```

Live example: https://www.thebreld.co.ke/google-clone/

### Follow

See [eric ricky](https://www.linkedin.com/in/erick-otieno-7532b01b9/) to follow me on linkedIn
