// const multer = require("multer");
// const { GridFsStorage } = require("multer-gridfs-storage");
// const Grid = require("gridfs-stream");
// const mongoose = require("mongoose");

// let gfs, gridfsBucket;
// const conn = mongoose.connection;

// conn.once("open", () => {
//   gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
//     bucketName: "photos",
//   });
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("photos");
// });

// const storage = new GridFsStorage({
//   url: process.env.MONGO_URI,
//   options: {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
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

let gridfsBucket;
const conn = mongoose.connection;

conn.once("open", () => {
  try {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: "photos",
    });
  } catch (error) {
    console.error("Error initializing GridFSBucket:", error);
  }
});

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

    if (match.includes(file.mimetype)) {
      const fileInfo = {
        bucketName: "photos",
        filename: `${Date.now()}-image-${file.originalname}`,
        _id: new mongoose.Types.ObjectId().toString(), // Ensure _id is defined
      };

      return fileInfo;
    }

    const filename = `${Date.now()}-image-${file.originalname}`;
    const fileInfo = {
      filename,
      _id: new mongoose.Types.ObjectId().toString(), // Ensure _id is defined
    };

    return fileInfo;
  },
});

const upload = multer({ storage });

module.exports = { upload };
