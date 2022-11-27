const authLogin = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
    } else {
        // sessionStorage.setItem("user_id", req.session.user_id)
        next();
    }
};

module.exports = authLogin;