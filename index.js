const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})
app.get('/log', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'log.txt'))
})
app.listen(9001, () => { console.log(`app running on http://127.0.0.1:9001`) })