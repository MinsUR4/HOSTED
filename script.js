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
        // Your code here
    } else {
// Get the elements once to avoid repetitive DOM queries
const countdownScreen = document.getElementById('launch_countdown_screen');
const countdownNumber = document.getElementById('launchCountdownNumber');
const countdownProgress = document.getElementById('launchCountdownProgress');

// Update the screen when the WebSocket is down
countdownScreen.innerHTML = `
    <div id="errorMessage">
        <h1>The Server Is Down!</h1>
        <p>Please try again later.</p>
    </div>
`;

// Apply styles
countdownScreen.style.backgroundColor = '#333'; // Dark background
countdownScreen.style.color = '#fff'; // White text
countdownScreen.style.display = 'flex';
countdownScreen.style.flexDirection = 'column';
countdownScreen.style.alignItems = 'center';
countdownScreen.style.justifyContent = 'center';
countdownScreen.style.fontFamily = 'Arial, sans-serif';
countdownScreen.style.textAlign = 'center';
countdownScreen.style.padding = '20px';
countdownScreen.style.border = '2px solid #f00'; // Red border

countdownNumber.style.display = 'none'; // Hide countdown number
countdownProgress.style.display = 'none'; // Hide countdown progress

    }
}

// Execute the check
checkAndExecute();