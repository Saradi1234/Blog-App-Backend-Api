const app = require('./app');
const dotenv = require('dotenv'); 
//The dotenv package is a great way to keep passwords, API keys, and other sensitive data out of your code. It allows you to create environment variables in a . env file instead of putting them in your code.
const mongoose = require('mongoose');


dotenv.config();
//connect to DB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(3000, () => console.log('Server running......'));

