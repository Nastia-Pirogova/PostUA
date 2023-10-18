// function InitMapCLASS (container,styles){
//     let _markers = container.querySelectorAll('.marker'),
//
//         map = new google.maps.Map( container, {
//             zoom		: 14,
//             center		: new google.maps.LatLng(0, 0),
//             styles: styles,
//             mapTypeId	: google.maps.MapTypeId.ROADMAP,
//             disableDefaultUI: true,
//             zoomControl: false,
//             mapTypeControl: false,
//             scaleControl: false,
//             streetViewControl: false,
//             rotateControl: false,
//             fullscreenControl: false
//         });
//
//     map.markers = [];
//
//     let bounds = new google.maps.LatLngBounds();
//     _markers.forEach((elem,i) => {
//         let latlng = new google.maps.LatLng(elem.getAttribute('data-lat'), elem.getAttribute('data-lng')),
//             marker = new google.maps.Marker({
//                 position: latlng,
//                 icon: document.getElementById('location-icon-src').innerText,
//                 map: map
//             });
//
//
//         if( elem.innerText.length > 0 ) {
//             let infowindow = new google.maps.InfoWindow({
//                 content		: elem.innerText
//             });
//             google.maps.event.addListener(marker, 'click', function() {
//                 infowindow.open( map, marker );
//             });
//         }
//
//
//         map.markers.push( marker );
//         bounds.extend( latlng );
//
//     });
//
//     if( map.markers.length === 1 ) {
//         map.setCenter( bounds.getCenter() );
//
//         // map.setZoom( 14 );
//     } else {
//         map.fitBounds( bounds );
//     }
//
// }
//
// function initMap(){
//     // let styles=[];
//
//     let styles=[
//         {
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#f5f5f5"
//                 }
//             ]
//         },
//         {
//             "elementType": "labels.icon",
//             "stylers": [
//                 {
//                     "visibility": "off"
//                 }
//             ]
//         },
//         {
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#616161"
//                 }
//             ]
//         },
//         {
//             "elementType": "labels.text.stroke",
//             "stylers": [
//                 {
//                     "color": "#f5f5f5"
//                 }
//             ]
//         },
//         {
//             "featureType": "administrative.land_parcel",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#bdbdbd"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#eeeeee"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#757575"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi.park",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#e5e5e5"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi.park",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#9e9e9e"
//                 }
//             ]
//         },
//         {
//             "featureType": "road",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#ffffff"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.arterial",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#757575"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.highway",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#dadada"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.highway",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#616161"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.local",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#9e9e9e"
//                 }
//             ]
//         },
//         {
//             "featureType": "transit.line",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#e5e5e5"
//                 }
//             ]
//         },
//         {
//             "featureType": "transit.station",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#eeeeee"
//                 }
//             ]
//         },
//         {
//             "featureType": "water",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#c9c9c9"
//                 }
//             ]
//         },
//         {
//             "featureType": "water",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#9e9e9e"
//                 }
//             ]
//         }
//     ];
//     if(document.readyState === "complete" || document.readyState === "loaded"){
//         document.querySelectorAll('.google-map').forEach((el) => {
//             new InitMapCLASS(el,styles);
//         });
//     } else {
//         document.addEventListener('DOMContentLoaded', function () {
//             document.querySelectorAll('.google-map').forEach((el) => {
//                 new InitMapCLASS(el,styles);
//             });
//         });
//     }
// }
//
// document.addEventListener('DOMContentLoaded', function () {
//     //handler for header color changes onscroll
//     (function () {
//         let
//             headerTransparentClass = 'page-is-scrolled',
//             scrollHandler = () => {
//                 let top = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
//                 // if (top <= 50 && window.innerWidth > widthMobile) {
//                 if (top >= 50) {
//                     document.body.classList.add(headerTransparentClass);
//                 } else {
//                     document.body.classList.remove(headerTransparentClass);
//                 }
//             };
//
//         window.addEventListener('scroll', scrollHandler);
//         scrollHandler();
//
//     }());
//
//     (function () {
//         let
//             burgerBtn = document.getElementById('burger-button'),
//             handler = function (btn) {
//                 let
//                     openClass = 'burger-menu-is-open';
//                 btn.addEventListener('click',()=>{
//                     document.getElementsByTagName('body')[0].classList.toggle(openClass)
//                 })
//
//
//
//
//             }
//
//
//         handler(burgerBtn);
//     } ())
//
// });
//
//
// jQuery( document ).ready( function( $ ) {
//
//     // $('.phone-masked').mask("+38(999)-999-99-99?");
//     $('.mfp-video').magnificPopup({mainClass: 'mfp-fade', type: 'iframe'});
//
//     $('.awards_img_container').magnificPopup({
//         delegate: 'a',
//         type: 'image',
//         mainClass: 'mfp-fade',
//         gallery : {
//             enabled: true,
//         }
//     });
//
//     $('.products-slider').slick({
//         arrows: false,
//         dots: true,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         // autoplay: true,
//         // autoplaySpeed: 3000,
//
//         responsive:  [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: true,
//                 }
//             },
//             {
//                 breakpoint: 364,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: true,
//                 }
//             },
//         ]
//
//     });
//
//     $('.partners-slider').slick({
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         arrows: false,
//         dots: true,
//         // centerMode: true,
//         // centerPadding: '50px',
//
//         responsive:  [
//             {
//                 breakpoint: 997,
//                 settings: {
//                     slidesToShow: 4,
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 3,
//                 }
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },
//             {
//                 breakpoint: 364,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             },
//         ]
//     });
// });
//



function initMap() {
    // Отримайте посилання на контейнер для карти
    var mapContainer = document.getElementById("map");

    // Створіть об'єкт карти
    var mapA = new google.maps.Map(mapContainer, {
        zoom: 10,
        center: { lat: 53.349805, lng: -6.26031 } // Початкові координати для Дубліна
    });

    // Додайте маркери для місць у Дубліні
    var places = [
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

    // Додайте маркери на карту для кожного місця
    // places.forEach(function(place) {
    //     new google.maps.Marker({
    //         position: place.position,
    //         map: mapA,
    //         title: place.name
    //     });
    // });

    places.forEach(function(place) {
        var marker = new google.maps.Marker({
            position: place.position,
            map: map,
            title: place.name,
            icon: {
                url: './images/marker.png', // Вставте URL вашого зображення
                scaledSize: new google.maps.Size(30, 30) // Розмір зображення
            }
        });
    });
}