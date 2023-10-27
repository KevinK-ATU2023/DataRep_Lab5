const express = require('express')
const app = express()
const port = 4000

const body_parser = require('body-parser')
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());


app.get('/name', (req, res) => {
    res.send('Hello '+req.query.fname+' '+req.query.lname)
})

app.post('/name', (req, res) => {
    res.send('Hello POST: '+req.body.fname+' ' +req.body.lname)
})

// listening for http get request coming in
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/whatever', (req, res) => {
    res.send('GoodBye')
})

app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

app.get('/hello/:name', (req, res) => {
    res.send('Hello '+req.params.name)
})

app.get('/api/books', (req, res) => {
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
    ]   
    
    res.json({
        my_books:data,
    })
})

app.get('/test', (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

// listen at port for http request
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})