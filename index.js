const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const cors = require('cors');

const app =  express();


mongoose.connect("mongodb://localhost:27017/joke").then(
          () => {console.log('Database connection is successful') },
          err => { console.log('Error when connecting to the database'+ err)}
);

//Bodyparser, morgan and cors middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('tiny'));
app.use(cors());




app.get('/', (req, res)=>{
    res.send('This will work');
})

app.get('/posts', (req, res)=>{
    console.log('getting posts');
    Post.find({}).then(posts=>{
        res.json(posts);
    })
    
});

app.post('/post', (req, res)=>{
    console.log('Making post');
    const{name, subject, comment} = req.body;
    
    // Post.create({
    // name : req.body.name,
    // subject : req.body.subject,
    // comment : req.body.comment
    // }).then(post=>{
    //     res.json(post);
    // })

    const newPost = new Post({
        name,
        subject,
        comment
    });
    newPost.save();
    console.log(newPost);
})



const Port = 4000;
app.listen(Port, ()=>console.log(`Server running on port ${Port}`));