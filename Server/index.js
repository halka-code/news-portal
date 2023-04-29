// import express from 'express';
const express = require('express');
// import cors from 'cors';
const cors = require('cors');
// import categories from './data/categories.json' assert { type: 'json' };

const categories = require('./data/categories.json');
// import news from './data/news.json' assert { type : 'json'} ; 
const news = require('./data/news.json') ;

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello This is my First SERVER app')
})
app.get('/categories', (req, res) => {
    res.send(categories)
});
app.get('/news'  , (req , res) => { 
    res.send(news)
})
app.get('/infiniteScroll/:limit' , (req , res) => {
   let limit = req.params.limit ;
    if(limit > news.length) {
        limit = news.length ;
    }
    // console.log(Number(limit))
    const data = news.slice(0 , limit) ;
    res.send(data)
})

app.listen(port, () => {
    console.log(`Port is running on ${port} number port`)
}); 