const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    return res.status(200).json({ success: true }).end();
})

app.listen(process.env.PORT || 8081);