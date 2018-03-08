/* ===================
        Map
 =================== */

function initialize() {
    var mapOptions = {
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
