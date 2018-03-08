/* ===================
        Map
 =================== */

function initialize() {
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        center: new google.maps.LatLng(51.4973223, -0.176),
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,

        styles: [
            {
                featureType: "landscape",
                stylers: [
                    { saturation: -100 },
                    { lightness: 65 },
                    { visibility: "on" }
                ]
            },
            {
                featureType: "poi",
                stylers: [
                    { saturation: -100 },
                    { lightness: 51 },
                    { visibility: "simplified" }
                ]
            },
            {
                featureType: "road.highway",
                stylers: [{ saturation: -100 }, { visibility: "simplified" }]
            },
            {
                featureType: "road.arterial",
                stylers: [
                    { saturation: -100 },
                    { lightness: 30 },
                    { visibility: "on" }
                ]
            },
            {
                featureType: "road.local",
                stylers: [
                    { saturation: -100 },
                    { lightness: 40 },
                    { visibility: "on" }
                ]
            },
            {
                featureType: "transit",
                stylers: [{ saturation: -100 }, { visibility: "simplified" }]
            },
            {
                featureType: "administrative.province",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "water",
                elementType: "labels",
                stylers: [
                    { visibility: "on" },
                    { lightness: -25 },
                    { saturation: -100 }
                ]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    { hue: "#ffff00" },
                    { lightness: -25 },
                    { saturation: -97 }
                ]
            }
        ]
    };

    var map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapOptions
    );
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(51.4969, -0.1722),
        map: map,
        title: "V&A",
        icon: "/img/marker2.png"
    });
}
google.maps.event.addDomListener(window, "load", initialize);
