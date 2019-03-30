const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const multer = require("multer");
// Initialize App
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "./images");
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  }
});
const upload = multer({ storage: Storage });

// DB Setup
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express Session
app.use(
  session({
    secret: "secretbountymessage",
    resave: true,
    saveUninitialized: true
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/users", require("./routes/users")); // Register, Login, Logout User
app.use("/find", require("./routes/find")); // Find new litter bounties
app.use("/post", require("./routes/post")); // List new litter bounties

app.post("/upload", upload.array("photo", 3), (req, res) => {
  console.log("file", req.files);
  console.log("body", req.body);
  res.status(200).json({
    message: "success!"
  });
});

app.listen(PORT, () => console.log(`Serer started on port ${PORT}`));
