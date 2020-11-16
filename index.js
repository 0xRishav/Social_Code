const express = require('express');
// const router = require('./routes');
const app = express();
const port = 8000;


// use rountes from express
app.use('/',require('./routes'));





app.listen(port, function(err){
    if(err){
        console.log(`Eroor: ${err}`);
        return;
    }
    console.log(`server is running on port: ${port}`);
})