const express = require('express')
const app = express()


const passport = require('passport')

require('./auth.js')




app.get('/', (req,res)=>{
    res.send('<a href="/auth/google">Authenticate</a>')
})

app.get('/auth/google',passport.authenticate('google',{scope:['profile', 'email']}))



app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect : '/protected',
        failureRedirect : '/auth/failure'
    })

)

app.get('/protected',isLoggedin, (req,res)=>{
    res.send(`Hello ${req.user.displayName}`)
})


app.get('/auth/failure', (req,res)=>{
    res.send("Something went wrong")
})










app.listen(3000,()=>{
    console.log('Server running on port 3000')
})