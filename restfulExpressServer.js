const express = require('express');
const petRoutes = require('./src/petroutes')

const app = express();

//body parse
app.use(express.json());

app.use('/pets', petRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))
