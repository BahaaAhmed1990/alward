const express = require('express');
const path = require('path');
const log = require('./middlewares/log');
const logController = require('./controllers/logController');
const app = express();

app.use(log)
app.use(express.static(path.resolve(__dirname, 'dist')))


app.get('/log', logController)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
app.listen(9001, () => { console.log(`app running on http://127.0.0.1:9001`) })