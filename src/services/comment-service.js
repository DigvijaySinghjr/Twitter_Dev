import { CommentRepository, TweetRepository } from '../repository/index.js';

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(userId, modelId, modelType, content) {
        console.log('inside comment service-layer');
        if(modelType == 'Comment'){                                                           //comment on model
            var commentable = await this.commentRepository.get(modelId);
        }else if(modelType == 'Tweet'){                                                       //comment on Tweet
            var commentable = await this.tweetRepository.get(modelId);
        }else{
            throw new Error("unknown model type");
        }
        const comment  = await this.commentRepository.create({
            content: content,
            userId: userId,
            onModel: modelType,
            commentable: modelId,
            comments: []
        });
        commentable.comments.push(comment);
        await commentable.save();
        console.log('successfully created and return comment');
        return comment;
    }
}

export default CommentService;