function initMap() {
    let mapContainer = document.getElementById("map");

    let mapA = new google.maps.Map(mapContainer, {
        zoom: 11,
        center: { lat: 53.349805, lng: -6.26031 } // Початкові координати для Дубліна
    });

    let places = [
        { name: "Парковка Blanchardstown Shopping Centre", position: { lat: 53.392402, lng: -6.366764 } },
        { name: "Donabate Shoreline Hotel", position: { lat: 53.483509, lng: -6.123286 } },
        { name: "Carnegie Court Hotel", position: { lat: 53.460363, lng: -6.217229 } },
        { name: "Montjoy Square, Dublin", position: { lat: 53.357170, lng: -6.253144 } },
        { name: "Ukrainian Community Centre, D06XE18", position: { lat: 53.338694, lng: -6.308983 } },
        { name: "Bray Royal Hotel", position: { lat: 53.201283, lng: -6.099982 } },
        { name: "Clayton hotel Leopardstown", position: { lat: 53.272394, lng: -6.213804 } },
        { name: "Готель City West", position: { lat: 53.288028, lng: -6.437216 } },
        { name: "Готель City Ark", position: { lat: 53.346306, lng: -6.254328 } },
        { name: "Clayton Hotel Liffey Valley", position: { lat: 53.356873, lng: -6.398184 } },
        { name: "Дублін 8 GEC", position: { lat: 53.341719, lng: -6.280546 } }
    ];

    places.forEach(function(place) {
        new google.maps.Marker({
            position: place.position,
            map: mapA,
            title: place.name,
                    icon: {
                        url: './images/marker.png', // Вставте URL вашого зображення
                        scaledSize: new google.maps.Size(30, 45) // Розмір зображення
                    }
        });
    });
}