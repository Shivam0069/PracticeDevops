const http = require("http");
const app = require("./app");
const connectToDb = require("./db/db");
const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    await connectToDb();
    console.log("Database connected successfully");

    const server = http.createServer(app);

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
}

startServer();
