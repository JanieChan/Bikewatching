// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoiamFuaWUtY2hhbiIsImEiOiJjbWhzbDZicGwxbTJqMmxvbzdmMWloM3RpIn0.CuDCPomV1v3RiYMyYE5Hjw';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the div where the map will render
  style: 'mapbox://styles/janie-chan/cmhsmiuwm000b01rbebe0ao3i', // Map style
  center: [-71.10664994522303, 42.36660750982412], // [longitude, latitude]
  zoom: 12, // Initial zoom level
  minZoom: 5, // Minimum allowed zoom
  maxZoom: 18, // Maximum allowed zoom
});