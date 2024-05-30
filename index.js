import express from 'express';
const app = express();
const port = 3000;
let today = new Date().getDay();
console.log('Today: ', today);
// let name = 'david';

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

app.get('/submit', (req, res) => {
    res.send('<h1>Submit page</h1>');
});

app.get('/submit', (req, res) => {
    res.render('index.ejs', { name: 'David' });
});

app.get('/other', (req, res) => {
    if (today >= 5) {
        res.render('index.ejs', { name: 'Time to relax.' });
    } else {
        res.render('index.ejs', { name: 'Time to work.' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
