const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const VERSION = require("./config/keys").version;

const users = require("./routes/users");
const testimonials = require("./routes/testimonials");
const sessions = require("./routes/sessions");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.use(`/api/users`, users);
app.use(`/api/sessions`, sessions);
app.use(`/api/testimonials`, testimonials);

app.get('/', (req, res) => {
    return res.send("PTRGV^2 API v" + VERSION)
})

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})