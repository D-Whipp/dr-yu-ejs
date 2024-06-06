import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/submit', (req, res) => {
    let firstName = req.body['fName'].length;
    let lastName = req.body['lName'].length;
    let nameLength = firstName + lastName;
    console.log('Name Length: ', nameLength);

    res.render('index.ejs', { nameCount: nameLength });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
