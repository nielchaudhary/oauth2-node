const express = require('express')
const app = express()


const passport = require('passport')

const session = require('express-session')

app.use(session({secret : 'cats'}))
app.use(passport.initialize())
app.use(passport.session())


require('./auth.js')



function isLoggedin(req,res,next){
    req.user? next() : res.sendStatus(401)
}



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







app.get('/logout',(req,res)=>{
    req.logout(()=>{})
    req.session.destroy()
    res.send("Logged Out")
})


app.listen(3000,()=>{
    console.log('Server running on port 3000')
})