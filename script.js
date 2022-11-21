"use strict";

const getToken = async () => {
  const res = await fetch("http://localhost:5000");
  const { token } = await res.json();

  return token;
};

const successLocation = (position) => {
  console.log(position);
  const longitude = position.coords.longitude;
  const latitude = position.coords.latitude;

  setupMap([longitude, latitude]);
};

const setupMap = (center) => {
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
};

const errorLocation = (err) => {
  console.log(err);
  setupMap([-74.5, 40]); //default location
};

const init = async () => {
  mapboxgl.accessToken = await getToken();

  console.log(mapboxgl.accessToken);
  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
  });
};

init();
