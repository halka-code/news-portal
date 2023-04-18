import Express from "express";

const app = Express();
const port = process.env.PORT ||  5000 ; 

app.get('/' , (req , res)=> { 
    res.send('Hello This is my First SERVER app')
})

app.listen(port , ()=>{
    console.log(`Port is running on ${port} number port`)
})