// Importe a biblioteca Leaflet
import L from 'leaflet';

// Crie um mapa e defina as coordenadas iniciais e o nível de zoom
var map = L.map('map').setView([51.505, -0.09], 13);

// Adicione um mapa base, como o Mapbox
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Adicione um marcador ao mapa
var marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup("Marcador de Exemplo").openPopup();