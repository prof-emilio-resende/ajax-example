import express from "express";
import cors from "cors";

const app = express();

app.use(express.json(), cors());

app.get("/", (req, res) => {
    res.send("ola mundo!");
});

app.post("/", (req, res) => {
    const { text } = req.body;

    console.log('corpo req');
    console.log(req.body);

    res.send(JSON.stringify({
        text: text
    }))
});

app.listen(3000, () => {
    console.log("projeto  inicializado...");
})