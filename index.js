const express = require('express');
const sendMail = require('./mail');
const path = require('path')

const PORT = 8080 || process.env.PORT;

const app = express()

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json());



app.get("/", (req, res)=>{
    // res.send("Hassan Ademuyiwa")
    res.sendFile(path.join(__dirname,"views", "index.html"))
})


app.post('/contact', (req, res) => {

    const { subject, email, text} = req.body;
    console.log('Data:', req.body)

    sendMail(email, subject, text, function(err, data){
        if(err){
            res.status(500).json({message: "Internal Error"});
        } else {
            res.json({message: "Email sent!!!"});
        }
    })
    res.json({message: "Message received!!!"})
})

app.listen(PORT, ()=>{
    console.log(`server is runing on port ${PORT}` )
}) 