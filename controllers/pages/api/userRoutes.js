const router = require('express').Router();
const { User } = require('../../../models');



router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: [
                'id',
                'email',
                'user_password'
            ]
        });
        console.log(userData);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/new-user', async (req, res) => {
    const { email:EmailInput, user_password:PasswordInput } = req.body;
    const newUserData = await User.create({
        email: EmailInput,
        user_password: PasswordInput
    });

    res.json(newUserData);
})


module.exports = router;