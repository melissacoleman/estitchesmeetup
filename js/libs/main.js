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
                elementType: "geometry",
                stylers: [
                    {
                        color: "#f5f5f5"
                    }
                ]
            },
            {
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#616161"
                    }
                ]
            },
            {
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#f5f5f5"
                    }
                ]
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#bdbdbd"
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eeeeee"
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "labels.text",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#757575"
                    }
                ]
            },
            {
                featureType: "poi.business",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e5e5e5"
                    }
                ]
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#ffffff"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "road.arterial",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#757575"
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#dadada"
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#616161"
                    }
                ]
            },
            {
                featureType: "road.local",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e"
                    }
                ]
            },
            {
                featureType: "transit",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e5e5e5"
                    }
                ]
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eeeeee"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#c9c9c9"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e"
                    }
                ]
            }
        ]

        // styles: [
        //     {
        //         featureType: "landscape",
        //         stylers: [
        //             { saturation: -100 },
        //             { lightness: 65 },
        //             { visibility: "on" }
        //         ]
        //     },
        //     {
        //         featureType: "poi",
        //         stylers: [
        //             { saturation: -100 },
        //             { lightness: 51 },
        //             { visibility: "simplified" }
        //         ]
        //     },
        //     {
        //         featureType: "road.highway",
        //         stylers: [{ saturation: -100 }, { visibility: "simplified" }]
        //     },
        //     {
        //         featureType: "road.arterial",
        //         stylers: [
        //             { saturation: -100 },
        //             { lightness: 30 },
        //             { visibility: "on" }
        //         ]
        //     },
        //     {
        //         featureType: "road.local",
        //         stylers: [
        //             { saturation: -100 },
        //             { lightness: 40 },
        //             { visibility: "on" }
        //         ]
        //     },
        //     {
        //         featureType: "transit",
        //         stylers: [{ saturation: -100 }, { visibility: "simplified" }]
        //     },
        //     {
        //         featureType: "administrative.province",
        //         stylers: [{ visibility: "off" }]
        //     },
        //     {
        //         featureType: "water",
        //         elementType: "labels",
        //         stylers: [
        //             { visibility: "on" },
        //             { lightness: -25 },
        //             { saturation: -100 }
        //         ]
        //     },
        //     {
        //         featureType: "water",
        //         elementType: "geometry",
        //         stylers: [
        //             { hue: "#ffff00" },
        //             { lightness: -25 },
        //             { saturation: -97 }
        //         ]
        //     }
        // ]
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
