const express = require('express');
const app = express();

app.use(express.json({type:'application/json'}));
app.use(express.urlencoded({extended:true}));


app.get('/api/v1',(req, res)=> {
    res.send('Hello World!')
})

app.get('/',(req, res)=> {
    res.send('Hello Andréa!')
})
node
app.listen(5000,()=>{
    console.log('server started on port 5000')
})

