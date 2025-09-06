import CommentService from '../services/comment-service.js';

const commentService = new CommentService();

export const createComment = async(req, res) => {
    try {
        console.log('hit commentService');
        const response = await commentService.create(req.body.userId, req.query.modelId, req.query.modelType, req.body.content);    
        //instead of req.body.userId, we should use req.userId (in above line)
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched a tweet',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}


/**
 * Both work because of different data sources:
1) req.user.id - From JWT authentication
-> Set by your authenticate middleware after verifying the token
-> Contains the user ID from the JWT payload
-> Secure - can't be faked by client

2) req.body.userId - From request body
-> Sent by the client in the JSON payload
-> Insecure - client can send any user ID they want
-> Security risk - users could comment as other users

Why req.user.id is better:
-> Authentication-based - uses the verified token
-> Secure - can't be manipulated by client
-> Consistent - always matches the logged-in user
 */