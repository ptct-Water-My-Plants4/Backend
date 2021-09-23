const { findById } = require("../auth/auth-model");

const checkUserId = async (req, res, next) => {
    try {
        const user = await findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: `user with id ${req.params.id} not found` });
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};

module.exports = { checkUserId };