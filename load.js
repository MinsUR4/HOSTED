// JavaScript code to override the entire HTML content of the page

document.addEventListener('DOMContentLoaded', function() {
    // The new HTML content to be inserted
    const newHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="1.8" />
        <meta name="keywords" content="e:RE" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RE:X" />
        <meta property="og:description" content="NO" />
        <title>My Drive</title>
        <style>
            #launch_countdown_screen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
                color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            #launchCountdownProgress {
                width: 0;
                height: 10px;
                background: #0f0;
                margin-top: 10px;
            }
        </style>
        <script type="text/javascript">
            "use strict";

            window.eaglercraftXOpts = { container: "game_frame" };

        </script>
    </head>
    <link type="image/png" rel="shortcut icon" href="https://kstatic.googleusercontent.com/files/d57b24106c34c7e50ef3d98423b94ddaf35ad2da73a9b9d4d12f52dbb9dd4c08c2957f6255ab8690d5ef0b32cff8287e09577d05e479d263e872160c4c9e8363" />
    <body style="margin:0px;width:100vw;height:100vh;overflow:hidden;" id="game_frame">
        <div id="launch_countdown_screen">
            <div id="launchCountdownNumber">5</div>
            <div id="launchCountdownProgress"></div>
        </div>
        <script src="https://rawcdn.githack.com/MinsUR4/HOSTED/cf24883a47625ba2016c2709d20e92157e4df206/script1.js"></script>
    </body>
    </html>
    `;

    // Replace the entire HTML content of the page with the new HTML
    document.documentElement.innerHTML = newHTML;
});
