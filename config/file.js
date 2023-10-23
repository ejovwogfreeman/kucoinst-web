// const multer = require("multer");
// const { GridFsStorage } = require("multer-gridfs-storage");
// const mongoose = require("mongoose");

// // Connect to your MongoDB here, if you haven't already
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let gfs;
// const conn = mongoose.connection;

// conn.once("open", () => {
//   gfs = new mongoose.mongo.GridFSBucket(conn.db, {
//     bucketName: "photos",
//   });
// });

// const storage = new GridFsStorage({
//   url: process.env.MONGO_URI, // Provide your MongoDB URL here
//   file: (req, file) => {
//     const match = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

//     if (match.indexOf(file.mimetype) === -1) {
//       const filename = `${Date.now()}-image-${file.originalname}`;
//       return filename;
//     }

//     return {
//       bucketName: "photos",
//       filename: `${Date.now()}-image-${file.originalname}`,
//     };
//   },
// });

// const upload = multer({ storage });

// module.exports = { upload };

const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const mongoose = require("mongoose");

// Connect to your MongoDB here, if you haven't already
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gfs;
const conn = mongoose.connection;

conn.once("open", () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "photos",
  });
});

const storage = new GridFsStorage({
  url: process.env.MONGO_URI, // Provide your MongoDB URL here
  file: (req, file) => {
    const match = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    const fileId = req.body._id; // Get the custom _id from the request body

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-image-${file.originalname}`;
      return {
        filename,
        metadata: { _id: fileId }, // Set the custom _id as metadata
      };
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-image-${file.originalname}`,
      metadata: { _id: fileId }, // Set the custom _id as metadata
    };
  },
});

const upload = multer({ storage });

module.exports = { upload };
