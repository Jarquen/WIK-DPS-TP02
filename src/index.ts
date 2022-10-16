import express from "express";

const app = express();

app.get('/ping', (req, res) => {
    try {
        return res.status(200).json(req.headers)
    } catch (error) {
        return res.status(500).json({message: "undefined error"})
    }

})

app.get('*', (req, res) => {
    return res.status(404).json({message: "NOT FOUND"})
})


const port = process.env.PING_LISTEN_PORT || 4000;
app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
})
