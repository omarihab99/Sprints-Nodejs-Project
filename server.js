const express = require('express');
const dotenv = require('dotenv');
const chalk = require('chalk');
const userRoute = require('./routes/userRoutes');
const productRoute = require('./routes/productRoutes');
const categoryRoute = require('./routes/categoryRoutes');
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/category', categoryRoute);
app.use('/product', productRoute);
app.listen(PORT, () => {
    console.log(chalk.green(`Server running on port ${PORT}`));
});