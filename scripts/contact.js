document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    initMap();
});

function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);

    console.log('Form submitted:', formValues);
    showFormSuccessMessage();
    e.target.reset();
}

function showFormSuccessMessage() {
    const messageElement = document.createElement('div');
    messageElement.className = 'form-success-message';
    messageElement.textContent = 'Thank you for your message! I will get back to you soon.';

    const formContainer = document.querySelector('.contact-form-container');
    if (formContainer) {
        formContainer.appendChild(messageElement);
        setTimeout(() => messageElement.remove(), 5000);
    }
}

function initMap() {
    const linz = { lat: 48.3069, lng: 14.2858 };
    const mapElement = document.getElementById('map');
    
    if (mapElement) {
        const map = new google.maps.Map(mapElement, {
            zoom: 13,
            center: linz,
            styles: [
                {elementType: "geometry", stylers: [{color: "#242f3e"}]},
                {elementType: "labels.text.stroke", stylers: [{color: "#242f3e"}]},
                {elementType: "labels.text.fill", stylers: [{color: "#746855"}]},
                {
                    featureType: "administrative.locality",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#d59563"}]
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#d59563"}]
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{color: "#263c3f"}]
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#6b9a76"}]
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{color: "#38414e"}]
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{color: "#212a37"}]
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#9ca5b3"}]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{color: "#746855"}]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{color: "#1f2835"}]
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#f3d19c"}]
                },
                {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{color: "#2f3948"}]
                },
                {
                    featureType: "transit.station",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#d59563"}]
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{color: "#17263c"}]
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#515c6d"}]
                },
                {
                    featureType: "water",
                    elementType: "labels.text.stroke",
                    stylers: [{color: "#17263c"}]
                }
            ]
        });

        new google.maps.Marker({
            position: linz,
            map: map,
            title: 'Alex Nightshade'
        });
    }
}