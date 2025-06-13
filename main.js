// This file contains the JavaScript code for the chicken business website.
// It handles menu functionality, delivery options, and dynamic content loading for various sections.

document.addEventListener('DOMContentLoaded', function() {
    // Load the menu component
    loadComponent('components/menu.html', 'menu');

    // Load the delivery component
    loadComponent('components/delivery.html', 'delivery');

    // Load the mission and vision component
    loadComponent('components/mission-vision.html', 'mission-vision');

    // Load the promotions component
    loadComponent('components/promotions.html', 'promotions');

    function loadComponent(url, elementId) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }
});