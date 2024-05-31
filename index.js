import express from 'express';
const app = express();
const port = 3000;
const now = new Date();
let today = now.getDay();
const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const dayOfWeek = daysOfTheWeek[now.getDay()];
console.log('Day: ', dayOfWeek);

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
    if (today === 6 || today === 0) {
        res.render('index.ejs', {
            name: `Today is ${dayOfWeek}. Time to relax.`,
        });
    } else {
        res.render('index.ejs', {
            name: `Today is ${dayOfWeek}. Time to work.`,
        });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
