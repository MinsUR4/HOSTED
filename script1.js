"use strict";

// URL of the WebSocket to check (easily changeable)
const webSocketURL = 'wss://0cc6da77-75cd-48b7-992e-133dba0a599e-00-1zaezkqedhjbl.janeway.replit.dev';

// Variable to control the interval
let intervalId;
let wasWebSocketUp = false; 
let t = true; 

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
    try {
        const isUp = await checkWebSocket(webSocketURL);

        if (isUp) {
            if (!wasWebSocketUp) {
                // WebSocket just became up, execute the code
                console.log('WebSocket is up!');
                
                // Add any code you want to execute when the WebSocket is confirmed to be up
                wasWebSocketUp = true; // Update the state
            }
        } else {
            if (t) {
                // WebSocket just became down, update the UI
                const countdownScreen = document.getElementById('launch_countdown_screen');
                const countdownNumber = document.getElementById('launchCountdownNumber');
                const countdownProgress = document.getElementById('launchCountdownProgress');
                
                countdownScreen.innerHTML = `
                    <div id="errorMessage">
                        <h1>The Server Is Down!</h1>
                        <p>Please try again later.</p>
                    </div>
                `;
                
                // Apply styles
                countdownScreen.style.backgroundColor = '#000'; // Black background
                countdownScreen.style.color = '#fff'; // White text
                countdownScreen.style.display = 'flex';
                countdownScreen.style.flexDirection = 'column';
                countdownScreen.style.alignItems = 'center';
                countdownScreen.style.justifyContent = 'center';
                countdownScreen.style.fontFamily = 'Arial, sans-serif';
                countdownScreen.style.textAlign = 'center';
                countdownScreen.style.padding = '20px';
                countdownScreen.style.border = '20px solid #f00'; // Red border
                countdownScreen.style.boxSizing = 'border-box'; // Include border in total width and height
                countdownScreen.style.position = 'fixed';
                countdownScreen.style.top = '0';
                countdownScreen.style.left = '0';
                countdownScreen.style.width = '100%';
                countdownScreen.style.height = '100%';
                countdownScreen.style.zIndex = '9999'; // Ensure it overlays other content
                
                countdownNumber.style.display = 'none'; // Hide countdown number
                countdownProgress.style.display = 'none'; // Hide countdown progress
                
                wasWebSocketUp = false; // Update the state
            }
        }
    } catch (error) {
        console.error('Error checking WebSocket status:', error);
    }
}

// Check the WebSocket status every 3 seconds
intervalId = setInterval(checkAndExecute, 3000);

// Initial check
checkAndExecute();
