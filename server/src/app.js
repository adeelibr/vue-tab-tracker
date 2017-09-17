const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
	const { email } = req.body;
	return res.send({  message: `Hello ${email}! Your user was registered have fun` })
})

app.listen(process.env.PORT || 8081);