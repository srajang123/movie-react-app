const express=require('express');
const cors=require('cors');
const db=require('./util/database');
const PORT=process.env.PORT||5000;

const app=express();
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use((res,resp,next)=>{
    resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    resp.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
//app.use(routes);

app.get('/',cors(),(req,res,next)=>{
    console.log('Request Accepted');
});
app.get('/get-movies',cors(),(req,res,next)=>{
    console.log('Sending Movies');
    db.execute('select * from movies')
    .then(re=>{
        res.json(JSON.stringify(re[0]));
    })
});
app.post('/add-movie',cors(),(req,res,next)=>{
    console.log('Receving Movies');
    console.log(req.body);
    db.execute('insert into movies values(?,?,?)',[req.body.movie,req.body.genre,req.body.year])
    .then(re=>{
        console.log('Data Added');
        res.redirect('/get-movies');
    })
})
app.listen(PORT,()=>{console.log(`Server up and running at ${PORT}`)});