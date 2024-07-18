document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    var map = L.map('map').setView([20, 0], 2);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Function to add a marker
    function addMarker(designer, style, date, coordinates) {
        var marker = L.marker(coordinates).addTo(map);
        marker.bindPopup(`<b>${designer}</b><br>${style}<br>${date}`).openPopup();
    }

    // Handle adding marker
    document.getElementById('addMarker').addEventListener('click', function () {
        var designer = document.getElementById('designer').value;
        var style = document.getElementById('style').value;
        var date = document.getElementById('date').value;
        
        // For demo purposes, using fixed coordinates
        var coordinates = [51.505, -0.09]; // Replace with user-provided coordinates

        addMarker(designer, style, date, coordinates);
    });
});
