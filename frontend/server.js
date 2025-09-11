const http = require("http");
const { exec } = require("child_process");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const express = require("express");

const app = express();
const DEFAULT_PORT = 3000;
let currentPort = DEFAULT_PORT;

// Function to check if a port is in use
function isPortInUse(port) {
  return new Promise((resolve) => {
    const server = http.createServer();
    server.once("error", () => {
      resolve(true); // Port is in use
    });
    server.once("listening", () => {
      server.close();
      resolve(false); // Port is free
    });
    server.listen(port);
  });
}

// Function to find an available port
async function findAvailablePort(startPort) {
  let port = startPort;
  while (await isPortInUse(port)) {
    console.log(`Port ${port} is in use, trying next port...`);
    port++;
  }
  return port;
}

// Start the server
async function startServer() {
  try {
    // Find an available port
    currentPort = await findAvailablePort(DEFAULT_PORT);
    console.log(`Starting server on port ${currentPort}...`);

    // Set up static file serving from the build directory
    app.use(express.static(path.join(__dirname, "build")));

    // Any routes not handled by static files will return the React app
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "build", "index.html"));
    });

    // Start the server
    app.listen(currentPort, "0.0.0.0", () => {
      console.log(`Server is running on port ${currentPort}`);
      console.log(
        `You can now access the app at http://localhost:${currentPort}`,
      );
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

// Start the development server
console.log("Building the app...");
exec("npm run build", { cwd: __dirname }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error building the app: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  console.log(`stdout: ${stdout}`);
  console.log("Build completed, starting the server...");
  startServer();
});
