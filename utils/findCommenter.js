const findCommenter = (req, res, next) => {
    console.log("req.session.user_id", req.session.user_id)
    localStorage("test", "test")
    next();
};

module.exports = findCommenter;