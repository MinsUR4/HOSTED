"use strict";

// URL of the WebSocket to check (easily changeable)
const webSocketURL = 'wss://0cc6da77-75cd-48b7-992e-133dba0a599e-00-1zaezkqedhjbl.janeway.replit.dev';

// Function to check the WebSocket connection
function checkWebSocket(url) {
    return new Promise((resolve) => {
        const ws = new WebSocket(url);

        ws.onopen = () => {
            ws.close(); // Close the connection immediately after opening
            resolve(true);
        };

        ws.onerror = () => {
            resolve(false);
        };
    });
}

// Function to perform actions based on WebSocket status
async function checkAndExecute() {
    const isUp = await checkWebSocket(webSocketURL);

    if (isUp) {
        // WebSocket is up, execute your code here
        console.log('WebSocket is up!');
        // Your code here
    } else {
        // WebSocket is down, display a message
        document.getElementById('launch_countdown_screen').innerHTML = 'The WebSocket is down!';
        document.getElementById('launch_countdown_screen').style.background = '#f00'; // Red background
        document.getElementById('launchCountdownNumber').style.display = 'none'; // Hide countdown number
        document.getElementById('launchCountdownProgress').style.display = 'none'; // Hide countdown progress
    }
}

// Execute the check
checkAndExecute();
