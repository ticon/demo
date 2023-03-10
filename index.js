const express = require('express');

const app = express();
const PORT = process.env.PORT || 3010;

app.get('/', (req, res) => {
    res.send('Hola Rickson');
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});