const express = require('express');
const { engine } = require('express-handlebars');
const fileUpload = require('express-fileupload');

const app = express();
app.use(express.json());
app.use(fileUpload());
app.use(express.static('public'));
app.use('/photo', express.static('uploads'));

// Templating engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', (req, res) => {
    let sampleFile;
    let uploadPath;
    let now = new Date();

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No images were selected');
    }

    sampleFile = req.files.sampleFile;

    let fileName = 'img_' +
        now.getDate() +
        (now.getMonth() + 1) +
        now.getFullYear() +
        now.getHours() +
        now.getMinutes() +
        now.getSeconds() +
        now.getMilliseconds() +
        '.jpg';

    console.log(fileName);

    sampleFile.mv(__dirname + '/uploads/' + fileName, (err) => {
        console.log(err);
    });

    return res.end("Thank you")
})

app.listen(5000, () => {
    console.log("Listening on port 5000");
})