const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./connectdb')
const catrouter = require('./router/catrouter')
const app = express()
const apiPort = 8000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', catrouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

