import express from "express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inggest/index.js"
import "dotenv/config.js"
console.log("Dev sone", process.env.INNGEST_DEV)
const app = express();
app.use(express.json());

app.use(
    "/api/inngest",
    serve({
        client: inngest,
        functions,
    })
);

app.get("/", async (req, res) => {
    res.send("Hello world");
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})