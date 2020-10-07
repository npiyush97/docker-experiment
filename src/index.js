const app = require("express")();

app.get("/", (req, res) => {
    res.json({ message: "Docker is ready &#x1F433;" });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`app listen to localhost:${port}`);
});
