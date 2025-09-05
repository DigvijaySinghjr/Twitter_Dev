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

export const login = async (req, res) => {
    try {
        const token = await userService.signin(req.body);
        return res.status(200).json({
            message: 'Successfully loged in',
            data: token,
            err: [],
            success: true
        }) 
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong in controller',
            data: [],
            success: false,
            err: error
        });
    }
}