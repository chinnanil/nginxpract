const express = require('express');
const app = express();
const path = require('path')   ; 


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'build','index.html'));
    })
}

app.get("/",(req,res,next)=>{
res.send("hihihi ")
})


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log("listening"));

//heroku login
