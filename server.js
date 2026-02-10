const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const PASSWORD = process.env.BREACH_PASSWORD;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve public css/js
app.get('/app.css', (req,res)=>res.sendFile(path.join(__dirname,'app.css')));
app.get('/application.js', (req,res)=>res.sendFile(path.join(__dirname,'application.js')));


// 🔐 API login check
app.post('/api/login', (req,res)=>{
    const { password } = req.body;

    if(password === PASSWORD){
        res.json({ success:true });
    } else {
        res.json({ success:false });
    }
});


// protected page route
app.get('/data-leaks.html', (req,res)=>{
    res.sendFile(path.join(__dirname,'data-leaks.html'));
});

// homepage → password page
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'password.html'));
});

app.listen(PORT, ()=>console.log("Server running on " + PORT));
