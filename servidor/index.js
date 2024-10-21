const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    const message = [
    {
        saludo: "Bienvenido"
    },
    {
        saludo: "Bienvenido1"
    },
    {
        saludo: "bienvenido2"
    }
    ]
    res.send(message);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
