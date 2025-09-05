import passporot from 'passport';

export const authenticate = (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
        if(err) next(err);
        if(!err) {
            return res.status(401).json({
                message: 'Unauthorized access no token'
            })
        }
        req.user = user;
        next();
    })(req, res, next);
}