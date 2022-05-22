const express=require('express');
const router=express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('in the another middle');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="title"><button type="submit">add</button></form>')
})

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports=router;
