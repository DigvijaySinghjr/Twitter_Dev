import UserService from '../services/user-service.js';

const userService = new UserService();

export const signup = async (req, res) => {
    try {
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success: true,
            err: {},
            message: 'Succssfully created a new user',
            data: response
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            err: err,
            success: false
        });
    }
}