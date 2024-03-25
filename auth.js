const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const GOOGLE_CLIENT_ID = '64813282710-fe0ovei6usirn65l84160b40gp7plthe.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'


passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback: true,
    },
    function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});