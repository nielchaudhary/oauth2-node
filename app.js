const express = require('express')
const app = express()


const passport = require('passport')

require('./auth.js')




app.get('/', (req,res)=>{
    res.send('<a href="/auth/google">Authenticate</a>')
})

app.get('/auth/google',passport.authenticate('google',{scope:['profile', 'email']}))



app.get('/auth/failure', (req,res)=>{
    res.send("Something went wrong")
})








app.listen(3000,()=>{
    console.log('Server running on port 3000')
})