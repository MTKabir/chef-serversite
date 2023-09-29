const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

const allChef = require('./chef.json');

// get all the chef in the main route and in the chef route
app.get('/', (req, res) => {
    res.send(allChef);
})
app.get('/chef', (req, res) => {
    res.send(allChef);
})

// get a single chef 
app.get('/chef/:id', (req, res) => {
    const getRequestedId = parseInt(req.params.id);
    const singleChef = allChef.find(chef => chef.id === getRequestedId);
})

app.listen(port, () => {
    console.log('Listning to port', port)
})