import Like from '../models/like.js';
import CreudRepository from './crud-repository.js';

class LikeRepository extends CreudRepository{
    constructor(){
        super(Like);
    }
}

export default LikeRepository;