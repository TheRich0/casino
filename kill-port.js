// A simple script to find an available port

const net = require("net");

function findAvailablePort(startPort, endPort) {
  return new Promise((resolve, reject) => {
    let port = startPort;

    function tryPort(currentPort) {
      if (currentPort > endPort) {
        reject(
          new Error(
            `No available ports found between ${startPort} and ${endPort}`,
          ),
        );
        return;
      }

      const server = net.createServer();
      server.unref();

      server.on("error", () => {
        // Port is in use, try the next one
        tryPort(currentPort + 1);
      });

      server.listen(currentPort, () => {
        server.close(() => {
          resolve(currentPort);
        });
      });
    }

    tryPort(port);
  });
}

// Try to find an available port between 3000 and 9000
findAvailablePort(3000, 9000)
  .then((port) => {
    console.log(`PORT=${port}`);
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error finding available port:", err.message);
    process.exit(1);
  });
