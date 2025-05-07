const express = require('express');
const path = require('path');

const app = express(); // Create an Express application
const PORT = 3000; // Define a port number for the server to listen on

// Serve static files from the 'public' directory
// This tells Express that if it receives a request for a file,
// it should look for it in the 'public' folder.
// It will automatically serve 'index.html' for the root path ('/').
app.use(express.static(path.join(__dirname, 'public')));

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
    console.log(`WiWi server is running on http://localhost:${PORT}`);
    console.log("Your frontend files are now being served from the 'public' folder.");
    console.log("Make sure your index.html, style.css, script.js, and images folder are inside 'public'.");
});