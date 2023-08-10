import express from "express";
import { createServer } from "http";
import router from "./src/app";

export const PORT = 8080;
const app = express();
const server = createServer(app);

app.use(express.json());
app.use("/", router);

// Handle HTTP Requests
server.listen(PORT,async () => {
    console.log(`Server listening at : http://localhost:${PORT}`);
}); 