
import express from "express";
import path from "path";
import open from "open";
import compression from 'compression';



/*eslint-disable no-console */

const port = 3000;
const app = express();

//This is NOT for actual production use. This is useful for hosting the minified production build
//for local debugging purposes.
app.use(compression());
app.use(express.static('dist'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});
app.get('/users',function(req,res){
    //Hard coding for simplicity. Pretend this hit a a real database.
    res.json([
        {"id":12, "firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
        {"id":2,"firstName":"Tanny","lastName":"Norton","email":"tnorton@yahoo.com"},
        {"id":2,"firstName":"Tina","lastName":"Lee","email":"lee.tina@gmail.com"}
    ]);
})
app.listen(port,function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
})