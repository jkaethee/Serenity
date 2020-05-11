const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const MONGODB_URI = 'mongodb+srv://jkaethee:leopards16!@cluster0-zcyyq.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/serenity_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
})

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })



// Schema
const Schema = mongoose.Schema;
const serenityUser = new Schema({
    name: String,
})
const fileSchema = new Schema({
    'image': { type: String, required: true }
})

// Model
const SerenityUser = mongoose.model('SerenityUser', serenityUser);
const File = mongoose.model('File', fileSchema )

// HTTP Request logger
app.use(morgan('tiny'));

//ROUTES WILL GO HERE
app.get('/', function(req, res) {
    res.json({ message: 'WELCOME' });   
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/userCreate', (req, res) => {
    // Saving data to our mongo database
    const data = {
        name: req.body.userInfo.name,
    }

    const newSerenityUser = new SerenityUser(data); // instance of model
    newSerenityUser.save().then((result) => {
        console.log(result);
    }).catch(err => console.log(err));

    res.send(true);
});

app.post('/api/uploadphoto', upload.single('image'), (req, res) => {
    try{
        let file = new File({
            image: port + '/uploads/' + req.file.filename
        });
        if (!file) { return res.statusMessage(403).send('file not found')}
        file.save().then((result) => {
            console.log(result);
        }).catch(err => console.log(err));

        res.send({
            message: 'file uploaded',
            data: data
        })
    }
    catch(ex) {
        res.send(ex.message);
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`));