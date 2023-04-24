//  import necessary libraries
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('good morning world & those who inhabit it');
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));