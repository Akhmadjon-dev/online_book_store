const multer = require('multer');
const path = require('path');
const { nanoid } = require('nanoid')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
    
  },
  filename: function (req, file, cb) {
    cb(null, `${nanoid()}${path.extname(file.originalname)}`);
  },
})

var upload = multer({ storage: storage })

module.exports = upload;