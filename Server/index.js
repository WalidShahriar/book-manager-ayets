const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', require("./routes/BooksRoute"));

app.get('/', (req, res) => {
    res.send("server running");
});

const PORT = process.env.PORT || 5022;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});