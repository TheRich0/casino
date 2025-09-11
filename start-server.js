const { spawn } = require("child_process");
const http = require("http");

// Check if port is available
function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = http.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close();
      resolve(true);
    });
    server.listen(port);
  });
}

// Find an available port
async function findAvailablePort(startPort) {
  let port = startPort;
  while (!(await isPortAvailable(port))) {
    console.log(`Port ${port} is in use, trying ${port + 1}...`);
    port++;
    if (port > 65535) {
      throw new Error("No available ports found");
    }
  }
  return port;
}

// Start the server using the found port
async function startServer() {
  try {
    const availablePort = await findAvailablePort(3000);
    console.log(`Starting server on port ${availablePort}`);

    // Navigate to frontend directory and start the server
    const startProcess = spawn("npm", ["run", "start"], {
      cwd: "./frontend",
      env: { ...process.env, PORT: availablePort.toString() },
      stdio: "inherit",
    });

    startProcess.on("error", (err) => {
      console.error("Failed to start server:", err);
    });

    startProcess.on("close", (code) => {
      console.log(`Server process exited with code ${code}`);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Run the server
startServer();
