// const express = require("express");
// require("dotenv").config();
// const app = express();
// const userRoutes = require("./routes/userRoutes");
// const supportRoutes = require("./routes/supportRoutes");
// const connectDB = require("./config/db");
// const User = require("./models/userModel");
// const Transaction = require("./models/transactionModel");
// const Deposit = require("./models/depositModel");
// const Investment = require("./models/investmentModel");
// const Email = require("./models/emailModel");
// const cors = require("cors");
// const multer = require("multer");
// const { GridFsStorage } = require("multer-gridfs-storage");
// const Grid = require("gridfs-stream");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const corsOptions = {
//   origin: "*",
//   credentials: true,
//   optionSuccessStatus: 200,
// };

// let gfs, gridfsBucket;
// const conn = mongoose.connection;

// const port = process.env.PORT || 5000;
// connectDB();

// conn.once("open", () => {
//   gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
//     bucketName: "photos",
//   });
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("photos");
// });

// app.use(cors(corsOptions));

// app.use(express.json());
// app.use(
//   bodyParser.urlencoded({
//     limit: "50mb",
//     parameterLimit: 100000,
//     extended: true,
//   })
// );

// app.get("/file/:filename", async (req, res) => {
//   try {
//     const file = await gfs.files.findOne({ filename: req.params.filename });
//     const readStream = gridfsBucket.openDownloadStream(file._id);
//     readStream.pipe(res);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// });

// app.use("/api/users", userRoutes);
// app.use("/api/support", supportRoutes);

// app.get("/", (req, res) => {
//   res.send("Welcome to financial freedom investment");
// });

// const func = async () => {
//   await Email.find().then((data) => console.log(data));
// };

// app.listen(port, () => {
//   console.log(`server started at port ${port}`);
// });

const express = require("express");
require("dotenv").config();
const app = express();
const userRoutes = require("./routes/userRoutes");
const supportRoutes = require("./routes/supportRoutes");
const connectDB = require("./config/db");
const User = require("./models/userModel");
const Transaction = require("./models/transactionModel");
const Deposit = require("./models/depositModel");
const Investment = require("./models/investmentModel");
const Email = require("./models/emailModel");
const cors = require("cors");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const port = process.env.PORT || 5000;
connectDB();

// Set up GridFS and the storage engine
const conn = mongoose.connection;
let gfs;

conn.once("open", () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "photos",
    // You can add more options here, if needed
  });
});

app.use(cors(corsOptions));
app.use(express.json());

// Define a storage engine for GridFS using multer-gridfs-storage
const storage = new GridFsStorage({
  url: process.env.MONGO_URI, // Replace with your MongoDB URI
  file: (req, file) => {
    return {
      bucketName: "photos",
      filename: file.originalname, // You can modify the filename as needed
    };
  },
});

const upload = multer({ storage });

// Define an upload endpoint
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(201).json({ message: "File uploaded successfully" });
});

// Define a download endpoint
app.get("/file/:filename", (req, res) => {
  gfs.find({ filename: req.params.filename }).toArray((err, files) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!files || files.length === 0) {
      return res.status(404).json({ error: "File not found" });
    }

    const readStream = gfs.openDownloadStreamByName(req.params.filename);
    readStream.pipe(res);
  });
});

app.use("/api/users", userRoutes);
app.use("/api/support", supportRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to financial freedom investment");
});

const func = async () => {
  try {
    const emails = await Email.find();
    console.log(emails);
  } catch (error) {
    console.error(error);
  }
};

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
