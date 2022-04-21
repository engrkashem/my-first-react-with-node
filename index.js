const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//it is called route or api or endpoint
app.get('/', (req, res) => {
    res.send('Hello from my own first smarty node projects')
});

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01799999999' },
    { id: 3, name: 'sahnur', email: 'sahnur@gmail.com', phone: '01710101010' },
    { id: 4, name: 'mousumi', email: 'ousumi@gmail.com', phone: '01777777777' },
    { id: 5, name: 'mahiya mahi', email: 'mahi@gmail.com', phone: '01766666666' },
    { id: 6, name: 'bidya mim', email: 'mim@gmail.com', phone: '01755555555' },
    { id: 7, name: 'apu bishwash', email: 'apu@gmail.com', phone: '01744444444' }
]

app.get('/users', (req, res) => {

    //filter by query parameter.
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(u => u.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/users/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    res.send(user)
});

app.post('/users', (req, res) => {
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sweet fazlee from chapai')
});

app.listen(port, () => {
    console.log('Listening to port', port)
})
