const express = require('express')

const app=express()

app.use("/test",(req,res)=>{
    res.send('check on browser')
})

app.listen(7777,()=>{
    console.log('server started ...')
})