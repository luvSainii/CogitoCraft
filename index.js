const express = require("express");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectdb = require("./config/database");
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorHandler');

// rest object
const app = express();

// dotenv
dotenv.config();

// mongodb connection
connectdb();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

// auth Routes
app.use('/api/v1/auth', authRoutes);

// Use errorHandler as the last middleware
app.use(errorHandler);

// listening the port
app.listen(port, () => {
    console.log(`Server running in ${process.env.DEV_MODE} mode on ${port}`.bgCyan.white);
});
