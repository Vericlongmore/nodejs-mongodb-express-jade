var express = require('express');
var port=process.env.PORT || 4000
var app=express()


app.set('views','./views')

app.set('view engine','jade')

app.listen(port)

console.log("more node progressing"+port)

app.get('/',function(req,res){

res.render('index',{

title:'node index'

})

})

//detial

app.get('/movie/:id',function(req,res){

res.render('detial',{

title:'node detial'

})

})

//admin


app.get('/admin/movie',function(req,res){

res.render('admin',{

title:'node admin'

})

})



app.get('/admin/list',function(req,res){

res.render('list',{

title:'node list'

})

})