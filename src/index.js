const express = require('express');
const connect = require('./config/database');
const { HashtagRepository } = require('./repository');
const TweetService = require('./services/tweet-service');
const app = express();

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    let service = new TweetService();
    const tweet = await service.create({
         content: ' #love this this is girl my #first tweet #lethargic #netflix&chill   #joyous' 
        });

});