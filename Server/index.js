import express from 'express';
import cors from 'cors';
import categories from './data/categories.json' assert { type: 'json' };
import news from './data/news.json' assert { type : 'json'} ; 

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

app.listen(port, () => {
    console.log(`Port is running on ${port} number port`)
}); 