const express=require('express');
const bodyParser=require('body-parser')

const app = express();


const adminRoute=require('./routes/admin')
const shopRutes=require('./routes/shop')


app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoute);
app.use(shopRutes);

app.use((req,res,next)=>{
    res.status(404).send('<h2>page not fount</h2>')
})

app.listen(1000);